import Carousel from 'react-bootstrap/Carousel';
import img2 from '../imgs/caminhao.jpg'
import img3 from '../imgs/caminhao2.jpg'
import '../css/carrosel.css'

function Carrosel() {
  return (
    <Carousel data-bs-theme="dark" controls="true" className='carrosel' touch="true">
      <Carousel.Item>
        <img
          className="img"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>  
      <Carousel.Item>
        <img
          className="img"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;