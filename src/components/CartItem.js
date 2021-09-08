import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { FaTrash } from 'react-icons/fa';
import { AmountButtons } from '../components';
import { formatPrice } from '../utils/helpers';
const CartItem = ({ id, name, color, image, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const decrease = () => {
    toggleAmount(id, 'dec');
  };
  const increase = () => {
    toggleAmount(id, 'inc');
  };
  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color: <span style={{ background: color }}></span>
          </p>
          <p className='price-small'>{formatPrice(price)}</p>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons
        amount={amount}
        increase={increase}
        decrease={decrease}
        className='amount-btns'
      />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button
        type='button'
        className='remove-btn'
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 200px auto auto;
  gap: 3rem 1rem;
  margin-bottom: 3rem;
  place-items: center;

  .title {
    display: grid;
    grid-template-columns: 75px 125px;
    gap: 1rem;
    align-items: center;
    text-align: left;
    grid-template-rows: 75px;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--borderRadius);
    object-fit: cover;
  }

  .color,
  .subtotal {
    margin: 0;
    color: var(--white);
  }
  .color {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
  .remove-btn {
    color: red;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .price,
  .subtotal {
    display: none;
  }
  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    .subtotal {
      display: block;
      color: var(--primary-500);
    }
    .price {
      display: block;
      margin-bottom: 0;
    }
    .price-small {
      display: none;
    }
  }
`;

export default CartItem;
