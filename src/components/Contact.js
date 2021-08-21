import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <h3>Join our newsletter and get 10% off!</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            dolorum ullam excepturi et nam consequuntur! Sit amet consectetur
            adipisicing elit.
          </p>
          <form
            className='contact-form'
            action='https://formspree.io/f/mayalpay'
            method='POST'
          >
            <input
              type='email'
              className='form-input'
              placeholder='Enter email'
              name='_replyto'
            />
            <button type='submit' className='submit-btn'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
  }
  .contact-form {
    width: 90vw;
    max-width: var(--fixedWidth);
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    padding: 0.5rem 1rem;
    border: 2px solid var(--primary-500);
  }
  .form-input {
    background: var(--white);
    border-right: none;
    color: var(--grey-800);
    border-radius: 0;
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
  .submit-btn {
    border-top-right-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    background: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
    transition: var(--transition);
  }
  .form-input::placeholder {
    text-transform: capitalize;
  }

  .submit-btn:hover {
    color: var(--white);
    background: var(--primary-700);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }

  /* Extra padding when the services are translated downwards */
  @media (min-width: 1280px) {
    padding: 13rem 0;
  }
`;
export default Contact;
