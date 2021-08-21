import { product } from 'prelude-ls';
import React from 'react';
import styled from 'styled-components';
import { Loading, Error, Product } from '../components';
import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: products,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <h2 className='title'>Featured Products</h2>
        <div className='title-underline'></div>
        <div className='featured'>
          {products.slice(3).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
        <Link to='/products' className='btn'>
          All Products
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--grey-300);
  color: var(--grey-700);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    text-align: center;
    width: 150px;
    margin: 0 auto;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
  .title-underline {
    background: var(--grey-600);
  }
`;
export default FeaturedProducts;
