import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice living space' className='img about-img' />
        <article>
          <div className='title'>
            <h1>Our Story</h1>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            ducimus molestiae placeat at sunt consectetur maxime ab amet,
            cupiditate est corrupti alias veritatis distinctio perspiciatis
            adipisci voluptatibus dolor cum nulla. Ad ea molestiae suscipit enim
            in, ex et aliquam ullam.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 2rem 2rem;

  .about-img {
    height: 400px;
    object-fit: center;
  }
  .title {
    text-align: left;
  }
  .underline {
    background: var(--white);
  }
  p {
    letter-spacing: var(--letterSpacing);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }
`;
export default AboutPage;
