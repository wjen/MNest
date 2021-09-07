import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
const AmountButtons = ({ decrease, increase, amount }) => {
  return (
    <Wrapper className='amount-btns'>
      <button onClick={decrease}>
        <FaMinus />
      </button>
      <h2>{amount}</h2>
      <button onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  width: 150px;

  svg,
  h2 {
    color: var(--white);
  }
  h2 {
    margin-bottom: 0;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    background: var(--backgroundColor);
    border-color: transparent;
    cursor: pointer;
  }
`;

export default AmountButtons;
