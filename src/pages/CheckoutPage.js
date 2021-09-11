import React from 'react';
import styled from 'styled-components';
import PageHero from '../components/PageHero';
const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='Checkout' />
      <Wrapper className='page section section-center'>
        <h1>Checkout</h1>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  h1 {
    color: white;
    background: white;
  }
`;
export default CheckoutPage;
