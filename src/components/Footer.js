import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; <span id='date'>{new Date().getFullYear()}</span>
        <span className='footer-logo'> Modern Nest </span>
      </h5>
      <h5>
        &nbsp; Built by <a href='http://www.iamwenjen.com'> Wen Jen</a>
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  background: linear-gradient(360deg, black, transparent);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 0;
  bottom: 0;

  h5 {
    margin: 0;
  }
  .footer-logo,
  a {
    color: var(--primary-500);
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export default Footer;
