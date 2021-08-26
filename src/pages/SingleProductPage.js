import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import { Loading, Error, PageHero, ProductImages, Stars } from '../components';
import { single_product_url as url } from '../utils/constants';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const SingleProductPage = () => {
  const history = useHistory();
  const {
    fetchSingleProduct,
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
  } = useProductsContext();

  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  // Redirect home automatically in three seconds if error
  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        history.push('/');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center'>
        <Link to='/products' className='btn'>
          Go Back
        </Link>
        <div className='product-container'>
          <ProductImages images={images} />
          <section className='product-content'>
            <h1>{name}</h1>
            <Stars stars={stars} reviews={reviews} />
            <p className='price'>{formatPrice(price)}</p>
            <p className='description'>{description}</p>
            <p className='info'>
              <span>Availablility: </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className='info'>
              <span>SKU: </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <button className='btn'>Add to cart</button>}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-container {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .description,
  h1 {
    color: var(--grey-50);
  }
  .info {
    text-transform: capitalize;
    span {
      width: 200px;
      display: inline-block;
    }
  }
  @media (min-width: 992px) {
    .product-container {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
export default SingleProductPage;
