import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Trator from '../imgs/tractor.jpg'

function CardPersonalizado(mensagem) {
  //mensagem será passada dinamicamente por um obj que virá 
  mensagem = "Venda um trator agrícola robusto e confiável! Este trator está em excelente estado, pronto para enfrentar qualquer desafio agrícola. Equipado oferece desempenho excepcional e eficiência no campo. Manutenção regular realizada, histórico impecável. Não perca a oportunidade de adquirir esse trator de alta qualidade para impulsionar sua produção agrícola. Entre em contato para mais detalhes e agende uma visita.";

  mensagem = formataDescricao(mensagem);

  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={Trator} />
      <Card.Body>
        <Card.Title>Trator John Jeer</Card.Title>
        <Card.Text>{mensagem}
                </Card.Text>
        <Button variant="primary">Ver anúncio completo</Button>
      </Card.Body>
    </Card>
  );
}

function formataDescricao(descricao){
  if (descricao !== "" && descricao.length > 150)
    return descricao = descricao.substring(0, 150) + "...";
}

export default CardPersonalizado;


