import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { PAGES } from "../../router";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import { useMetaMask } from "../../hooks/useMetamask";
import { formatAddress } from "../../utils";

export default function Navigation() {
  const { hasProvider, wallet, connectMetaMask, isConnecting } = useMetaMask();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link className="navbar-brand" to="/">
            {import.meta.env.VITE_SITE_NAME}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {PAGES.map((page, index) => {
                return (
                  <Link className="nav-link" key={index} to={page.url}>
                    {page.name}
                  </Link>
                );
              })}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              {!hasProvider && (
                <a href="https://metamask.io" target="_blank" rel="noreferrer">
                  Install MetaMask
                </a>
              )}
              {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
                <Button disabled={isConnecting} onClick={connectMetaMask}>
                  Connect MetaMask
                </Button>
              )}
              {hasProvider && wallet.accounts.length > 0 && (
                <a
                  className="text_link tooltip-bottom"
                  href={`https://etherscan.io/address/${wallet}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {formatAddress(wallet.accounts[0])}
                </a>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
