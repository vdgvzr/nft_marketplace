import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation/Navigation";
import { MetaMaskContextProvider } from "./hooks/useMetamask";
import { Outlet } from "react-router-dom";
import Toasts from "./components/Toasts/Toasts";

function App() {
  return (
    <>
      <MetaMaskContextProvider>
        <header>
          <Navigation />
        </header>
        <main>
          <Toasts />
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
