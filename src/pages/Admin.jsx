import Btn from "../components/Button/Button";
import { useMetaMask } from "../hooks/useMetamask";

export default function Admin() {
  const {
    wallet,
    contract,
    isOwner,
    gen0Limit,
    gen0Counter,
    loadWeb3,
    setToastMessages,
  } = useMetaMask();

  const remainingGen0 = gen0Limit - gen0Counter;

  function createBotGen0(dnaString) {
    contract.methods
      ._createBotGen0(dnaString)
      .send({ from: wallet.accounts[0] })
      .once("receipt", () => {
        loadWeb3();
      })
      .catch((e) => {
        setToastMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            type: "error",
            message: e.message,
          },
        ]);
      });

    contract.events.Birth().on("data", function (e) {
      setToastMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          type: "success",
          message: `Successfully minted CryptoBot #${e.returnValues.botId}!`,
        },
      ]);
    });
  }

  function generateDna() {
    let dna = [];

    for (let i = 0; i < 14; i++) {
      let randomNumber = Math.random() * (9 - 0) + 0;
      dna.push(parseInt(randomNumber));
    }

    return parseInt(dna.join(""));
  }

  return (
    <>
      {isOwner && (
        <>
          <div className="row my-5">
            <div className="col-12">{contract._address}</div>
          </div>
          <div className="row my-5">
            <div className="col-12">{remainingGen0} left to mint</div>
          </div>
          <div className="row my-5">
            <div className="col-2">
              <Btn
                buttonText="Create Gen 0 Bot"
                onClick={() => {
                  createBotGen0(generateDna());
                }}
                disabled={remainingGen0 === 0}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
