import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product, index) => {
        const { id, name, image, price, description } = product;
        return (
          <article key={id} className='product-container'>
            <img src={image} alt={name} className='img' />
            <div className='product-details'>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p className='description'>{description.substr(0, 150)}...</p>
              <Link to={`/products/${id}`} className='btn'>
                {' '}
                Details{' '}
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  h4,
  h5 {
    margin-bottom: 0.5rem;
  }
  img {
    height: 200px;
    width: 300px;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  .price {
    color: var(--white);
  }
  .description {
    margin-top: 0;
    color: var(--grey-300);
  }
  @media (min-width: 992px) {
    .product-container {
      display: grid;
      grid-template-columns: auto 1fr;
      place-items: center;
      column-gap: 2rem;
    }
  }
`;
export default ListView;
