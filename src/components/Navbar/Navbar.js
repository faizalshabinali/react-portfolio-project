import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className='header-area bg-dark'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-dark '>
          <div className='container-fluid'>
            <a className='navbar-brand p-3' href='#'>
              FAIZAL ALI
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: '#fff' }}
                className='navbar-toggler-icon'
              />
            </button>
            <div
              className='collapse navbar-collapse container-fluid'
              id='navbarNav'
            >
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    about me
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    services
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    how work
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    portfolio
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
