import React from 'react';
import styled from 'styled-components';
import { PageHero, Sort, Filters, ProductList } from '../components';
const Products = () => {
  return (
    <main>
      <PageHero title='Products' />
      <Wrapper className='page section-center'>
        <div className='products'>
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
    grid-template-columns: 150px 1fr;
    margin: 2rem 0;
  }
`;
export default Products;
