import { useState } from "react";
import Base from "./components/nft/Base";
import { allColors } from "./assets/js/nftAttributes/colors";

function App() {
  const colors = Object.values(allColors());

  const [dna, setDna] = useState({
    skinColor: "bdbdbd",
    expressionColor: "ffffff",
    highlightColor: "cdcdcd",
    expression: 1,
  });

  return (
    <>
      <Base dna={dna} />
    </>
  );
}

export default App;
