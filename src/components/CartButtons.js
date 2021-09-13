import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();

  return (
    <Wrapper className='cart-btns-wrapper'>
      <Link to='/cart' className='cart-btn'>
        <span className='cart-container' onClick={closeSidebar}>
          Cart
          <FaShoppingCart />
          <span className='cart-qty'>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => {
            clearCart();
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
          <FaUserMinus />
        </button>
      ) : (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          Login
          <FaUserPlus />
        </button>
      )}
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
    top: -16px;
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
