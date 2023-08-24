import Btn from "../components/Button/Button";
import { useMetaMask } from "../hooks/useMetamask";

export default function Admin() {
  const { contract, isOwner, gen0Limit } = useMetaMask();

  function createBotGen0(dnaString) {
    console.log(dnaString);
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
          <div className="row">
            <div className="col-12">{contract._address}</div>
          </div>
          <div className="row">
            <div className="col-12">{gen0Limit} remaining</div>
          </div>
          <div className="row">
            <div className="col-2">
              <Btn
                buttonText="Create Gen 0 Bot"
                onClick={() => {
                  createBotGen0(generateDna());
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
