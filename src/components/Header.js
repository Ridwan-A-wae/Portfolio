/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='/'>
          <h1 style={{fontSize:"42px",}}>Portfolio</h1>
        </a>

        {/* button */}
        <button className='btn btn-sm'><a target="_blank" href="https://www.facebook.com/waaaaaan/">
              My Contact
              </a></button>
      </div>
    </div>
  </header>;
};

export default Header;
