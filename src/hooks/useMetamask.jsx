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
  const [gen0Limit, setGen0Limit] = useState(false);
  const [toastMessages, setToastMessages] = useState([]);
  const [wallet, setWallet] = useState(disconnectedState);

  function clearToastMessage(id) {
    setToastMessages(toastMessages.filter((message) => message.id !== id));
  }

  const _loadWeb3 = useCallback(async () => {
    setLoading(true);
    window.web3 = new Web3(window.ethereum);
    const accounts = await window.web3.eth.getAccounts();
    const networkId = await window.web3.eth.net.getId();
    const nftNetworkData = NftContract.networks[networkId];

    if (nftNetworkData) {
      const contract = new window.web3.eth.Contract(
        NftContract.abi,
        nftNetworkData.address
      );

      // Set global state vars
      setContract(contract);
      setOwner(await contract.methods.owner().call());
      setIsOwner(accounts[0] === (await contract.methods.owner().call()));
      setGen0Limit(await contract.methods.CREATION_LIMIT_GEN0().call());
    }
    setLoading(false);
  }, []);

  const loadWeb3 = useCallback(() => _loadWeb3(), [_loadWeb3]);

  // useCallback ensures that you don't uselessly recreate the _updateWallet function on every render
  const _updateWallet = useCallback(async (providedAccounts) => {
    const accounts =
      providedAccounts ||
      (await window.ethereum.request({ method: "eth_accounts" }));

    if (accounts.length === 0) {
      // If there are no accounts, then the user is disconnected
      setWallet(disconnectedState);
      return;
    }

    const balance = formatBalance(
      await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })
    );
    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });

    setWallet({ accounts, balance, chainId });
  }, []);

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
        window.ethereum.on("accountsChanged", updateWallet);
        window.ethereum.on("accountsChanged", loadWeb3);
        window.ethereum.on("chainChanged", updateWalletAndAccounts);
        window.ethereum.on("chainChanged", loadWeb3);
      }
    };

    getProvider();

    return () => {
      window.ethereum?.removeListener("accountsChanged", updateWallet);
      window.ethereum?.removeListener("accountsChanged", loadWeb3);
      window.ethereum?.removeListener("chainChanged", updateWalletAndAccounts);
      window.ethereum?.removeListener("chainChanged", loadWeb3);
    };
  }, [updateWallet, updateWalletAndAccounts, loadWeb3]);

  const connectMetaMask = async () => {
    setIsConnecting(true);

    try {
      const accounts = await window.ethereum.request({
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
        connectMetaMask,
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
