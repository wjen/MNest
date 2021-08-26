import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
const Products = () => {
  return (
    <main>
      <PageHero title='Products' />
      <Wrapper className='page section section-center'></Wrapper>
    </main>
  );
};

const Wrapper = styled.section``;
export default Products;
