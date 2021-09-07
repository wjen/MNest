import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            Shipping: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        <Link to='/checkout' className='btn btn-block text-center'>
          Proceed to checkout
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  margin-top: 3rem;
  article {
    padding: 1.5rem 3rem;
    background: var(--white);
    border: 2px solid var(--grey-100);
    border-radius: var(--borderRadius);

    h5,
    h4,
    p {
      color: var(--grey-700);
      display: grid;
      grid-template-columns: 200px 1fr;
    }
    h4,
    h5 {
      font-weight: 700;
    }
    h4 {
      margin-top: 2rem;
    }
  }
  .btn {
    margin-top: 1rem;
    font-weight: 700;
  }
  @media (min-width: 776px) {
    justify-content: end;
  }
`;
export default CartTotals;
