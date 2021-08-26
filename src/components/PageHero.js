import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const PageHero = ({ title, product }) => {
  console.log(product);
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <h3>
          <Link to='/' className='breadcrumb'>
            Home
          </Link>
          {product && <Link to='/products'> / Products </Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-300);
  color: var(--grey-800);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  h3 {
    margin-bottom: 0;
  }
  a {
    transition: var(--transition);

    color: var(--primary-800);
    &:hover {
      color: var(--white);
    }
  }
`;
export default PageHero;
