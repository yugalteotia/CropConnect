import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import slide1 from '../../assets/slide1.jpg';

function CarouselComp() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img 
          className="d-block w-full h-[400px] object-cover" // Set width to 100% and height to 400px
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-[400px] object-cover" 
          src={slide1}
          alt="Second slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-[400px] object-cover" 

          src={slide1}
          alt="Third slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
