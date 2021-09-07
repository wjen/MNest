import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { PageHero, CartContent } from '../components';

const CartPage = () => {
  const { cart, total_items, total_amount } = useCartContext();
  if (cart.length < 1) {
    return (
      <section className='page-100 section-center text-center'>
        <h1>Your cart is empty</h1>
        <Link to='/products' className='btn'>
          Go back
        </Link>
      </section>
    );
  } else {
    return (
      <main>
        <PageHero title='cart' />
        <Wrapper className='page'>
          <CartContent />
        </Wrapper>
      </main>
    );
  }
};

const Wrapper = styled.section``;
export default CartPage;
