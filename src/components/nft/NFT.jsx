import { Card } from "react-bootstrap";
import Base from "./Base";
import { allColors } from "../../assets/js/nftAttributes/colors";

export default function NFT({ dna }) {
  const colors = Object.values(allColors());

  const defaultDna = {
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
  };

  return (
    <>
      <Card
        style={{
          background: `#${
            dna ? dna.backgroundColor : defaultDna.backgroundColor
          }`,
        }}
      >
        <Card.Body>
          <Base dna={dna ? dna : defaultDna} />
        </Card.Body>
      </Card>
    </>
  );
}
