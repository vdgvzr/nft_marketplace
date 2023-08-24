import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { PAGES } from "../../router";
import { Link } from "react-router-dom";
import { useMetaMask } from "../../hooks/useMetamask";
import { formatAddress } from "../../utils";
import Btn from "../Button/Button";
import NFT from "../NftComponent/NFT";

export default function Navigation() {
  const { hasProvider, wallet, connectMetaMask, isConnecting } = useMetaMask();

  return (
    <>
      <Navbar expand="lg" className="">
        <Container fluid>
          <Link className="navbar-brand" to="/">
            <span className="navbar-brand__logo me-3">
              <NFT />
            </span>
            {import.meta.env.VITE_SITE_NAME}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {PAGES.map((page, index) => {
                return (
                  <Link className="nav-link" key={index} to={page.url}>
                    {page.name}
                  </Link>
                );
              })}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
              </NavDropdown>
              {!hasProvider && (
                <Btn
                  buttonText="Install MetaMask"
                  href="https://metamask.io"
                  classes="ms-3"
                />
              )}
              {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
                <Btn
                  buttonText={!isConnecting ? `Connect Metamask` : "Connecting"}
                  onClick={connectMetaMask}
                  classes="ms-3"
                />
              )}
              {hasProvider && wallet.accounts.length > 0 && (
                <Btn
                  buttonText={formatAddress(wallet.accounts[0])}
                  href={`https://etherscan.io/address/${wallet.accounts[0]}`}
                  classes="ms-3"
                />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
