import React from 'react';
import styled from 'styled-components';
const CartColumns = () => {
  return (
    <Wrapper>
      <div className='content'>
        <h5>item</h5>
        <h5>price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  .content {
    padding: 1rem;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(5, 1fr);
  }
`;
export default CartColumns;
