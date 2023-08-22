import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation/Navigation";
import { MetaMaskContextProvider } from "./hooks/useMetamask";
import { Outlet } from "react-router-dom";

function App() {
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
