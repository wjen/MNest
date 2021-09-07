import React, { useState } from 'react';
import styled from 'styled-components';

// set images as [] to prevent error when empty intially
const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <img src={main.url} alt='main img' className='img main' />
      <div className='gallery'>
        {images.map((img, index) => {
          return (
            <img
              key={index}
              src={img.url}
              onClick={() => setMain(images[index])}
              className={`${img.url === main.url ? 'active img' : 'img'}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 300px;
  }
  img {
    border-radius: var(--borderRadius);
  }
  .active {
    border: 2px solid var(--primary-500);
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 1rem;
    gap: 1rem;
    img {
      height: 50px;
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        transform: scale(1.1);
      }
    }
  }
  @media (min-width: 576px) {
    .main {
      height: 600px;
    }
    .gallery {
      img {
        height: 100px;
      }
    }
  }
  @media (min-width: 998px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;
export default ProductImages;
