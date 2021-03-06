import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { links } from '../utils/constants';
import logo from '../assets/mnest-logo.png';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className='logo-container'>
            <img src={logo} alt='logo' className='img logo-img' />
            <h2 className='logo-title'>
              Modern <span>Nest</span>
            </h2>
          </Link>
          <button className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  exact
                  activeClassName='selected'
                  className='nav-link'
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
          {myUser && (
            <li>
              <NavLink
                to='/checkout'
                activeClassName='selected'
                className='nav-link'
              >
                Checkout
              </NavLink>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(black, transparent);
  .nav-center {
    width: 90vw;
    max-width: var(--maxWidth);
    margin: 0 auto;
  }
  .logo-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: var(--transition);
    :hover {
      transform: scale(1.1);
    }
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-img {
    width: 70px;
    display: inline-block;
  }
  .logo-title {
    color: var(--white);
    margin-bottom: 0;

    span {
      color: var(--primary-500);
      font-weight: 700;
    }
  }

  .nav-toggle {
    border: transparent;
    color: var(--primary-500);
    background: transparent;
    svg {
      font-size: 2rem;
      transition: var(--transition);
    }
    svg:hover {
      transform: scale(1.2);
      color: var(--white);
    }
  }
  .nav-links {
    display: none;
  }

  /* imported from cartbuttons  */
  .cart-btns-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;

      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--primary-500);
        padding: 0.5rem;
        letter-spacing: var(--letterSpacing);
        text-transform: capitalize;

        &:hover {
          color: var(--primary-100);
          border-bottom: 2px solid var(--primary-100);
        }
      }
      .selected {
        color: var(--primary-100);
      }
    }
    .cart-btns-wrapper {
      display: grid;
    }
  }
`;
export default Navbar;
