import React from 'react';
import About from '../components/About';
import { Container } from 'react-bootstrap';
import MessageScreen from './MessageScreen';

const AboutScreen = () => {
  return (
    <Container>
      <About />
      <MessageScreen />
    </Container>
  )
}

export default AboutScreen;