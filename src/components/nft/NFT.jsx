import { Card } from "react-bootstrap";
import Base from "./Base";

export default function NFT({ dna }) {
  return (
    <>
      <Card style={{ background: `#${dna.backgroundColor}` }}>
        <Card.Body>
          <Base dna={dna} />
        </Card.Body>
      </Card>
    </>
  );
}
