import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Trator from '../imgs/tractor.jpg'

function CardPersonalizado() {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={Trator} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPersonalizado;


