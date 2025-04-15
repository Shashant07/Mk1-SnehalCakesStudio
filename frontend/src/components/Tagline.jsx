import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StartModal from './StartModal';

const Tagline = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <StartModal show={showModal} handleClose={() => setShowModal(false)} />
      <div className='home-tagline'>
        <Container>
          <Row>
            <Col sm={12} md={8} lg={8} xl={8} className='text-center'>
              <strong>Thank you for making us a part of your sweetest memories.</strong><br />With love,
              <br /><strong>– Team Snehal Cakes Studio</strong>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className='home-tagline-col2'>
              <button className='btn btn-pinkColor home-tagline-btn' onClick={() => setShowModal(true)}>
                Explore more →
              </button>

            </Col>
          </Row>

        </Container>
      </div>
    </>

  )
}

export default Tagline