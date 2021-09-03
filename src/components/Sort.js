import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { BsFillGridFill, BsList } from 'react-icons/bs';
const Sort = () => {
  const {
    grid_view,
    filtered_products: products,
    setListView,
    setGridView,
    updateSort,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          type='button'
          className={`${grid_view ? 'active' : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={`${!grid_view ? 'active' : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          onChange={updateSort}
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
  }
  p {
    text-transform: capitalize;
    margin: 0;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--borderRadius);
    height: 1.5rem;
    width: 1.5rem;
    transition: var(--transition);
    border: transparent;
    cursor: pointer;

    &:hover {
      background: var(--primary-500);
    }
  }
  hr {
    margin-left: 0;
    margin-right: 0;
  }
  .active {
    background: var(--primary-500);
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
  .sort-input {
    border-color: transparent;
    color: var(--primary-500);
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: transparent;
  }
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
`;

export default Sort;
