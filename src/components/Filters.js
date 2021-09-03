import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';
const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      max_price,
      min_price,
      price,
      free_shipping,
    },
    clearFilters,
    updateFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  const sidebarRef = useRef(null);

  // set up nike.com-like sidebar scroll
  useEffect(() => {
    function resizeSidebar() {
      const sidebarCoords = sidebarRef.current.getBoundingClientRect();
      sidebarRef.current.style.maxHeight = `${
        window.innerHeight - sidebarCoords.top
      }px`;
    }
    const event = window.addEventListener('scroll', resizeSidebar);

    return () => window.removeEventListener('scroll', resizeSidebar);
  }, []);
  return (
    <Wrapper>
      <div className='content' ref={sidebarRef}>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* input start */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              value={text}
              className='search-input'
              onChange={updateFilters}
            />
          </div>
          {/* input start */}
          {/* categories start */}
          <div className='form-control'>
            <h5>Categories</h5>
            <div className='category-container'>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    name='category'
                    onClick={updateFilters}
                    type='button'
                    className={`${
                      category === c.toLowerCase() ? 'active btn' : 'btn'
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* categories end*/}
          {/* companies start */}
          <div className='form-control'>
            <h5>Companies</h5>
            <select
              name='company'
              id='company'
              className='company'
              value={company}
              onChange={updateFilters}
            >
              {companies.map((c, index) => {
                return (
                  <option value={c} key={index}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* companies end */}
          {/* colors start */}
          <div className='form-control'>
            <h5>Colors</h5>
            <div className='colors'>
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      name='color'
                      type='button'
                      data-color='all'
                      key={index}
                      onClick={updateFilters}
                      className={`${
                        c === color ? 'all-btn active' : 'all-btn'
                      }`}
                    >
                      All
                    </button>
                  );
                }

                return (
                  <button
                    key={index}
                    name='color'
                    type='button'
                    onClick={updateFilters}
                    data-color={c}
                    style={{ background: c }}
                    className={`${
                      c === color ? 'active color-btn' : 'color-btn'
                    }`}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* colors end */}
          {/* price start */}
          <div className='form-control'>
            <h5>Price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/* price end */}
          {/* shipping start */}
          <div className='form-control shipping'>
            <label htmlFor='free_shipping'>Free Shipping</label>
            <input
              type='checkbox'
              id='free_shipping'
              name='free_shipping'
              onChange={updateFilters}
              checked={free_shipping}
            />
          </div>

          {/* shipping end */}
        </form>
        <button className='btn clear-btn' onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    border-radius: var(--borderRadius);
    border-color: transparent;
    letter-spacing: var(--letterSpacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    background: transparent;
    text-transform: capitalize;
    border: none;
    border-bottom: 1px solid transparent;
    color: var(--grey-100);
    border-radius: 0;
    letter-spacing: var(--letterSpacing);
    margin: 0.15rem 0;
    padding: 0.15rem 0;
  }
  .company {
    border-radius: var(--borderRadius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .all-btn {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }

  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--black);
    opacity: 0.5;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    cursor: pointer;

    svg {
      font-size: 0.5rem;
      color: var(--white));
    }
  }
  .active {
    opacity: 1;
    border-color: var(--primary-500);
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .price {
    color: var(--white);
    margin: 0.25rem 0;

  }
  .clear-btn {
    background: var(--red-dark);
    color: var(--white);
    padding: .375rem .75rem;
    border-radius: var(--borderRadius);
    border: transparent;
    display: inline-block;
    &:hover {
      background: var(--red-light);
      box-shadow: var(--shadow-3);
      color: var(--red-dark);
    }
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
      overflow-y: scroll;
      ${'' /* max-height: calc(100vh - 1rem) ; */}
    }
      .clear-btn {
        margin-bottom: 2rem;
      }
  }
`;
export default Filters;
