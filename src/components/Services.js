import React from 'react';
import styled from 'styled-components';
import { services } from '../utils/constants';
const Services = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <article className='header'>
          <h2>
            Custom Furniture <br />
            Tailored to you
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            eaque quisquam atque voluptate sunt nostrum. Dolor sit amet
            consectetur.
          </p>
        </article>
        <div className='services-center'>
          {services.map(({ id, text, icon, title }) => {
            return (
              <article key={id} className='service'>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-300);
  color: var(--grey-700);

  h4 {
    color: var(--primary-200);
  }

  p {
    margin-bottom: 0;
    line-height: 1.8;
  }
  .services-center {
    display: grid;
    gap: 2.5rem;
    margin-top: 4rem;
  }
  .service {
    background: var(--primary-700);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--borderRadius);
  }
  span {
    width: 4rem;
    height: 4rem;
    background: var(--primary-200);
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin: 0 auto;
    margin-bottom: 1rem;
    svg {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      ${'' /* place-items: center; */}
    }
  }

  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }

  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
