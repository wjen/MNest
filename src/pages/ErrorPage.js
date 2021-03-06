import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Sorry, page not found</h3>
        <Link to='/' className='btn'>
          Go Back
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--primary-200);
  color: var(--grey-800);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    margin-bottom: 2rem;
    text-transform: none;
  }
`;
export default ErrorPage;
