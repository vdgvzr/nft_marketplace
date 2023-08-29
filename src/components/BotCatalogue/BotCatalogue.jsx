import { Col, Row } from "react-bootstrap";
import NFT from "../NftComponent/NFT";
import { useMetaMask } from "../../hooks/useMetamask";

export default function BotCatalogue({ type }) {
  const { wallet, catalogue } = useMetaMask();

  return (
    <>
      <Row>
        {catalogue.map((bot, index) => {
          const gen = bot.generation.toString();
          const owner = bot.owner.toString().toUpperCase();

          if (gen === "0" && type === "admin") {
            return (
              <Col lg={3} key={index}>
                <NFT type="card" gen={gen} parts={bot.parts.toString()} />
              </Col>
            );
          } else if (type === "catalogue") {
            return (
              <Col lg={3} key={index}>
                <NFT type="card" gen={gen} parts={bot.parts.toString()} />
              </Col>
            );
          } else if (
            type === "account" &&
            owner === wallet.accounts[0].toString().toUpperCase()
          ) {
            return (
              <Col lg={3} key={index}>
                <NFT type="card" gen={gen} parts={bot.parts.toString()} />
              </Col>
            );
          }
        })}
      </Row>
    </>
  );
}
