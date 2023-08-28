import { Col, Row } from "react-bootstrap";
import Btn from "../components/Button/Button";
import { useMetaMask } from "../hooks/useMetamask";
import NFT from "../components/NftComponent/NFT";

export default function Admin() {
  const {
    wallet,
    contract,
    isOwner,
    gen0Limit,
    gen0Counter,
    loadWeb3,
    setToastMessages,
    catalogue,
  } = useMetaMask();

  const remainingGen0 = gen0Limit - gen0Counter;

  function createBotGen0(dnaString) {
    contract?.methods
      .createBotGen0(dnaString)
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
          <Row className="my-5">
            <Col xs={12}>{remainingGen0} left to mint</Col>
          </Row>
          <Row className="my-5">
            <Col lg={2}>
              <Btn
                buttonText="Create Gen 0 Bot"
                onClick={() => {
                  createBotGen0(generateDna());
                }}
                disabled={remainingGen0 === 0}
              />
            </Col>
          </Row>
          <Row>
            {catalogue.map((bot, index) => {
              const gen = bot.generation.toString();
              if (gen === "0") {
                return (
                  <Col lg={3} key={index}>
                    <NFT type="card" gen={gen} parts={bot.parts.toString()} />
                  </Col>
                );
              }
            })}
          </Row>
        </>
      )}
    </>
  );
}
