import React from 'react';
import styled from 'styled-components';
import { PageHero, Sort, Filters, ProductList } from '../components';
const Products = () => {
  return (
    <main>
      <PageHero title='Products' />
      <Wrapper className='page'>
        <div className='products section-center'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
export default Products;
