import React, { useState, useEffect } from 'react';

// import header data
import { header } from '../data';

// import components
import Nav from '../components/Navbar';
import NavMobile from './NavMobile';

// import icons
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    // scroll event
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  // destructure header data
  const { logo, btnLoginText, btnSignupText } = header;
  return (
    <header
      className={`${
        isActive ? 'bg-rose-100 py-[16px]' : 'bg-rose-200 py-[20px]'
      } fixed max-w-screen-5x1 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] z-30 transition-all duration-300`}
    >
      {/* logo */}
      <a href='/'>
        <img className='h-[100px]' src={logo} alt='' />
      </a>

      {/* nav - initially hidden - show in desktop mode */}
      <Nav />

      {/* buttons - initally hidden - show in desktop mode */}
      <div className='hidden lg:flex space-x-4'>
        <button className='btn btn-sm text-white hover:text-amber-400 transition'>
          {btnLoginText}
        </button>
        <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-inter rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>{btnSignupText}</button>
      </div>

      {/* nav menu button - hide on desktop */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className='lg:hidden absolute right-4'
      >
        {navMobile ? (
          <RiCloseFill className='text-3xl text-amber-400 cursor-pointer' />
        ) : (
          <RiMenu4Fill className='text-3xl text-amber-400 cursor-pointer' />
        )}
      </div>

      {/* nav mobile - hide on desktop */}
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;