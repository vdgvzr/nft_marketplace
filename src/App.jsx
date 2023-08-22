// import { useState } from "react";
// import { allColors } from "./assets/js/nftAttributes/colors";
// import NFT from "./components/nft/NFT";

import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation/Navigation";
import { MetaMaskContextProvider } from "./hooks/useMetamask";
import { Outlet } from "react-router-dom";

function App() {
  /* const colors = Object.values(allColors());

  const [dna, setDna] = useState({
    // Colors
    skinColor: colors[88],
    batteryColor: colors[88],
    highlightColor: colors[33],
    backgroundColor: colors[88],

    // Attributes
    expression: 0,
    antennae: 0,
    expressionColor: colors[14],
    antennaColor: colors[88],
    size: 0,
  }); */

  return (
    <>
      <MetaMaskContextProvider>
        <header>
          <Navigation />
        </header>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
        <footer></footer>
      </MetaMaskContextProvider>
    </>
  );
}

export default App;
