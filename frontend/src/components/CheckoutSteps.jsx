import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center my-4'>
      <Nav.Item>
        {step1 ? (
          <Nav.Link as={Link} to='/login' className='checkoutNavLink'>
            Sign In
          </Nav.Link>
        ) : (
          <Nav.Link disabled className='checkoutNavLink'>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Nav.Link as={Link} to='/shipping' className='checkoutNavLink'>
            Shipping
          </Nav.Link>
        ) : (
          <Nav.Link disabled className='checkoutNavLink'>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Nav.Link as={Link} to='/payment' className='checkoutNavLink'>
            Payment
          </Nav.Link>
        ) : (
          <Nav.Link disabled className='checkoutNavLink'>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Nav.Link as={Link} to='/placeorder' className='checkoutNavLink'>
            Place Order
          </Nav.Link>
        ) : (
          <Nav.Link disabled className='checkoutNavLink'>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
