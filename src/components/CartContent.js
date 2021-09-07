import React from 'react';
import { useCartContext } from '../context/cart_context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartColumns, CartTotals, CartItem } from '../components';
const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='btn'>
          Continue shopping
        </Link>
        <button className='btn clear-btn' onClick={clearCart}>
          Clear cart
        </button>
      </div>

      <CartTotals></CartTotals>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .clear-btn {
    background: var(--red-dark);
    color: var(--white);
    &:hover {
      background: var(--red-light);
      color: var(--red-dark);
    }
  }
`;
export default CartContent;
