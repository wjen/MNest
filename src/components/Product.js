import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { formatPrice } from '../utils/helpers';
import { FaSearch } from 'react-icons/fa';

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} className='img' />
          <div className='link'>
            <FaSearch />
          </div>
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>${price}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--black);
    border-radius: var(--borderRadius);
  }
  .img {
    border-radius: var(--borderRadius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 2.5rem;
    width: 2.5rem;
    background: var(--primary-500);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0;
    transition: var(--transition);
    svg {
      font-size: 1.25rem;
      color: var(--white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 1rem;
    font-weight: 400;
  }
  footer p {
    color: var(--primary-5);
    letter-spacing: var(--letterSpacing);
    margin-top: 0;
  }
`;
export default Product;
