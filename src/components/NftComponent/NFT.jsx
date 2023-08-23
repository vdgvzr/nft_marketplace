import { Card } from "react-bootstrap";
import { allColors } from "../../assets/js/nftAttributes/colors";
import Base from "./Base";

export default function NFT({ dna, type }) {
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
    expressionColor: colors[6],
    antennaColor: colors[88],
    size: 0,
  };

  return (
    <>
      {type === "card" ? (
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
      ) : (
        <Base dna={dna ? dna : defaultDna} />
      )}
    </>
  );
}
