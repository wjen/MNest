import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; <span id='date'>{new Date().getFullYear()}</span>
        <span class='footer-logo'> Modern Nest </span>
        Built by <a href='http://www.iamwenjen.com'> Wen Jen</a>
      </h5>
      <p>All Rights Reserved</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  background: var(--black);
  background-image: linear-gradient(
    to top,
    var(--black),
    var(--backgroundColor)
  );
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5,
  p {
    margin: 0;
  }
  .footer-logo,
  a {
    color: var(--primary-500);
  }
`;

export default Footer;
