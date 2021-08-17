import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';

const Sidebar = () => {
  return (
    <ul className='nav-links'>
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <li key={id}>
            <Link to={url}>{text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
