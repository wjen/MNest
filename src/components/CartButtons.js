import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import styled from 'styled-components';

const CartButtons = () => {
  return (
    <Wrapper className='cart-btns-wrapper'>
      <Link to='/cart' className='cart-btn'>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-qty'>2</span>
        </span>
      </Link>
      <button type='button' className='auth-btn'>
        Login
        <FaUserPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 200px;
  gap: 2rem;

  .cart-btn {
    color: var(--primary-500);
    font-size: 1.2rem;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    line-height: 1.15;
    border: 2px solid transparent;
    transition: var(--transition);

    &:hover {
      color: var(--primary-100);
      border-bottom: 2px solid white;
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;

    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-qty {
    position: absolute;
    top: -10px;
    right: -16px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey-900);
    padding: 12px;
  }

  .auth-btn {
    display: flex;
    align-items: center;
    color: var(--primary-500);
    font-size: 1.2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);

    svg {
      height: 1.6rem;
      margin-left: 5px;
    }

    &:hover {
      color: var(--primary-100);
      border-bottom: 2px solid white;
    }
  }
`;

export default CartButtons;
