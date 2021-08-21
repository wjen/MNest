import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import herobcg from '../assets/hero-bcg.jpeg';
import herobcg2 from '../assets/hero-bcg-2.jpeg';
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, facilis
          inventore, expedita placeat vel, quod earum voluptatum magni
          doloremque voluptatem ea sit temporibus. Sapiente repudiandae, fuga
          laudantium amet eum exercitationem?
        </p>
        <Link to='/products' className='btn hero-btn'>
          Shop Now
        </Link>
      </article>
      <article className='img-container'>
        <img src={herobcg} alt='table' className='img main-img' />
        <img src={herobcg2} alt='working' className='img accent-img' />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  column-gap: 2rem;

  .img-container {
    display: none;
  }

  p {
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-weight: 700;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 500px;
      position: relative;
      border-radius: var(--borderRadius);
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--borderRadius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--primary-500);
      bottom: 0%;
      left: -9%;
      border-radius: var(--borderRadius);
    }
  }
`;

export default Hero;
