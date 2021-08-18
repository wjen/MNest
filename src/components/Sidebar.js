import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import { links } from '../utils/constants';
import logo from '../assets/mnest-logo.png';
import { FaTimes } from 'react-icons/fa';
import CartButtons from '../components/CartButtons';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  return (
    <SidebarContainer> 
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-center'>
          <div className='sidebar-header'>
            <Link to='/' className='logo-container'>
              <img src={logo} alt='logo' className='img logo-img' />
              <h2 className='logo-title'>
                Modern <span>Nest</span>
              </h2>
            </Link>
            <button type='button' className='close-btn' onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>
          <ul className='links'>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link
                    to={url}
                    exact
                    activeClassName='selected'
                    onClick={closeSidebar}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to='/checkout'>Checkout</Link>
            </li>
          </ul>
          <CartButtons />
        </div>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar-center {
    width: 90vw;
    max-width: var(--maxWidth);
    margin: 0 auto;
  }
  .sidebar-header {
    display: flex;
    height: 5rem;
    align-items: center;
    justify-content: space-between;
  }

  .logo-container {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logo-img {
    width: 70px;
  }
  .logo-title {
    color: var(--white);
    margin-bottom: 0;

    span {
      color: var(--primary-500);
      font-weight: 700;
    }
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--backgroundColor);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .close-btn {
    font-size: 2em;
    color: red;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      transition: var(--transition);
    }
    svg:hover {
      transform: scale(1.2);
      color: var(--red-light);
    }
  }
  .links {
    margin-bottom: 2rem;

    li {
      padding: 1rem 0;
    }
    a {
      display: block;
      text-align: left;
      color: var(--primary-500);
      padding: 1rem 0;

      letter-spacing: var(--letterSpacing);
      text-transform: capitalize;
      transition: var(--transition);

      &:hover {
        color: var(--white);
        ${'' /* padding: 1rem 1.5rem; */}
        padding-left: 2rem;
        background: var(--black);
      }
    }
  }
  .cart-btns-wrapper {
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
