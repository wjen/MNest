import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/mnest-logo.png';
const Navbar = () => {
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className='logo-container'>
            <img src={logo} alt='logo' className='img logo-img' />
            <h1 className='logo-title'>
              Modern <span>Nest</span>
            </h1>
          </Link>
          <button className='nav-toggle btn'>
            <FaBars />
          </button>
        </div>
        <ul className='links-container'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Products</Link>
          </li>
        </ul>
      </div>
      {/* login component */}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 1rem 0;
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
    height: 5rem;
  }
  .logo-img {
    width: 100px;
    display: inline-block;
  }
  .logo-title {
    color: var(--white);
    margin-bottom: 0;
    font-weight: 400;
  }
  .logo-title span {
    color: var(--primary-500);
    font-weight: 700;
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
    }
  }

  .links-container {
    height: 0;
    overflow: hidden;
  }
`;
export default Navbar;
