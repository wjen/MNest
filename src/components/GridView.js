import React from 'react';
import styled from 'styled-components';
import { Product } from '../components';

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  img {
    height: 175px;
  }
  footer {
    p {
      color: var(--white);
    }
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
`;
export default GridView;
