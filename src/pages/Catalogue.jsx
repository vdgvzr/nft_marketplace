import { Col, Row } from "react-bootstrap";
import { useMetaMask } from "../hooks/useMetamask";
import NFT from "../components/NftComponent/NFT";

export default function Catalogue() {
  const { catalogue } = useMetaMask();

  return (
    <>
      <Row>
        {catalogue.map((bot, index) => {
          const gen = bot.generation.toString();
          return (
            <Col lg={3} key={index}>
              <NFT type="card" gen={gen} parts={bot.parts.toString()} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
