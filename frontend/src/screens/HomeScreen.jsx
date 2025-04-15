import { Container } from 'react-bootstrap';
import AllProducts from '../components/AllProducts';
import Tagline from '../components/Tagline';
// import ProductCarousel from '../components/ProductCarousel';
import About from '../components/About';
import ProductCarousel from '../components/ProductCarousel';
// import MessageScreen from './MessageScreen';

const HomeScreen = () => {

  return (
    <>
      <Container>
        <ProductCarousel />
        <About />
      </Container>
      <Tagline />
      <Container>
        <AllProducts />
      </Container>
      {/* <MessageScreen /> */}
    </>
  );
};

export default HomeScreen;
