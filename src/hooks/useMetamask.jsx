import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { formatBalance } from "../utils/index";
import NftContract from "/abis/NftContract.json";
import Web3 from "web3";

const disconnectedState = { accounts: [], balance: "", chainId: "" };

const MetaMaskContext = createContext({});

export const MetaMaskContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [hasProvider, setHasProvider] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [contract, setContract] = useState(false);
  const [owner, setOwner] = useState("0x0");
  const [isOwner, setIsOwner] = useState(false);
  const [gen0Limit, setGen0Limit] = useState(10);
  const [gen0Counter, setGen0Counter] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [catalogue, setCatalogue] = useState([]);
  const [toastMessages, setToastMessages] = useState([]);
  const [wallet, setWallet] = useState(disconnectedState);

  const provider = window.ethereum;

  function clearToastMessage(id) {
    setToastMessages(toastMessages.filter((message) => message.id !== id));
  }

  const _loadWeb3 = useCallback(async () => {
    setLoading(true);

    const web3 = new Web3(provider);
    const accounts = await provider.request({ method: "eth_accounts" });
    const networkId = await provider.networkVersion;
    const nftNetworkData = NftContract.networks[networkId];

    if (nftNetworkData) {
      // Set global state vars
      const contract = new web3.eth.Contract(
        NftContract.abi,
        nftNetworkData.address
      );
      const getOwner = await contract.methods.owner().call();
      let getIsOwner = false;
      if (accounts[0] != undefined) {
        getIsOwner =
          web3.utils.toChecksumAddress(accounts[0]) ===
          (await contract.methods.owner().call());
      }
      const getGen0Limit = web3.utils.toNumber(
        await contract.methods.CREATION_LIMIT_GEN0().call()
      );
      const getGen0Counter = web3.utils.toNumber(
        await contract.methods.GEN0_COUNTER().call()
      );
      const getTotalSupply = web3.utils.toNumber(
        await contract.methods.totalSupply().call()
      );
      const getCatalogue = [];
      for (let i = 0; i < getTotalSupply; i++) {
        const bot = await contract.methods.getBot(i).call();
        getCatalogue.push(bot);
      }

      setContract(contract);
      setOwner(getOwner);
      setIsOwner(getIsOwner);
      setGen0Limit(getGen0Limit);
      setGen0Counter(getGen0Counter);
      setTotalSupply(getTotalSupply);
      setCatalogue(getCatalogue);
    }
    setLoading(false);
  }, [provider]);

  const loadWeb3 = useCallback(() => _loadWeb3(), [_loadWeb3]);

  // useCallback ensures that you don't uselessly recreate the _updateWallet function on every render
  const _updateWallet = useCallback(
    async (providedAccounts) => {
      const accounts =
        providedAccounts ||
        (await provider.request({ method: "eth_accounts" }));

      if (accounts.length === 0) {
        // If there are no accounts, then the user is disconnected
        setWallet(disconnectedState);
        return;
      }

      const balance = formatBalance(
        await provider.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        })
      );
      const chainId = await provider.request({
        method: "eth_chainId",
      });

      setWallet({ accounts, balance, chainId });
    },
    [provider]
  );

  const updateWalletAndAccounts = useCallback(
    () => _updateWallet(),
    [_updateWallet]
  );
  const updateWallet = useCallback(
    (accounts) => _updateWallet(accounts),
    [_updateWallet]
  );

  /**
   * This logic checks if MetaMask is installed. If it is, some event handlers are set up
   * to update the wallet state when MetaMask changes. The function returned by useEffect
   * is used as a "cleanup": it removes the event handlers whenever the MetaMaskProvider
   * is unmounted.
   */
  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        updateWalletAndAccounts();
        loadWeb3();
        provider.on("accountsChanged", updateWallet);
        provider.on("accountsChanged", loadWeb3);
        provider.on("chainChanged", updateWalletAndAccounts);
        provider.on("chainChanged", loadWeb3);
      }
    };

    getProvider();

    return () => {
      provider?.removeListener("accountsChanged", updateWallet);
      provider?.removeListener("accountsChanged", loadWeb3);
      provider?.removeListener("chainChanged", updateWalletAndAccounts);
      provider?.removeListener("chainChanged", loadWeb3);
    };
  }, [updateWallet, updateWalletAndAccounts, loadWeb3, provider]);

  const connectMetaMask = async () => {
    setIsConnecting(true);

    try {
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      clearToastMessage();
      updateWallet(accounts);
      setToastMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          type: "success",
          message: `Connected ${accounts[0]}!`,
        },
      ]);
    } catch (err) {
      setToastMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), type: "error", message: err.message },
      ]);
    }
    setIsConnecting(false);
  };

  return (
    <MetaMaskContext.Provider
      value={{
        loading,
        wallet,
        hasProvider,
        error: !!toastMessages,
        toastMessages,
        isConnecting,
        contract,
        owner,
        isOwner,
        gen0Limit,
        gen0Counter,
        totalSupply,
        catalogue,
        connectMetaMask,
        setToastMessages,
        clearToastMessage,
        loadWeb3,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

export const useMetaMask = () => {
  const context = useContext(MetaMaskContext);
  if (context === undefined) {
    throw new Error(
      'useMetaMask must be used within a "MetaMaskContextProvider"'
    );
  }
  return context;
};
