import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim voluptate commodi eligendi repellat quidem laudantium tenetur! Optio, iusto animi.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae alias excepturi tempora animi ab ad ratione! Libero.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At minima dolores ad repellendus deserunt nulla minus! Quidem!',
  },
];

export { links, services };

export const products_url = 'https://course-api.com/react-store-products';
export const single_product_url =
  'https://course-api.com/react-store-single-product?id=';
