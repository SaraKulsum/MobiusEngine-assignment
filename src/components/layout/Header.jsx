import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-transparent  backdrop-blur-sm  fixed z-20 w-full text-white py-4'>
      <div className='container min-w-full px-[2rem] lg:px-[5.3rem] flex justify-between items-center'>
        <a href='/' className='flex items-center'>
          <img
            src='/assets/logo/logo.png'
            alt='InterviewSight'
            className='h-8'
          />
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex space-x-6'>
          <a href='/' className='hover:text-blue-200'>
            Home
          </a>
          <a href='#about' className='hover:text-blue-200'>
            About Us
          </a>
          <a href='#plans' className='hover:text-blue-200'>
            Plans
          </a>
          <a href='#testimonials' className='hover:text-blue-200'>
            Testimonials
          </a>
          <a href='#privacy' className='hover:text-blue-200'>
            Privacy Policy
          </a>
          <a href='#privacy' className='hover:text-blue-200'>
            More
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-white focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>

        {/* CTA Button */}
        <a
          href='#sign-up'
          className='hidden lg:block bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors'
        >
          Get Started
        </a>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='absolute top-16 left-0 right-0 bg-blue-700 shadow-lg lg:hidden z-50'>
            <div className='flex flex-col px-4 py-2'>
              <a href='/' className='py-2 hover:text-blue-200'>
                Home
              </a>
              <a href='#about' className='py-2 hover:text-blue-200'>
                About Us
              </a>
              <a href='#plans' className='py-2 hover:text-blue-200'>
                Plans
              </a>
              <a href='#testimonials' className='py-2 hover:text-blue-200'>
                Testimonials
              </a>
              <a href='#privacy' className='py-2 hover:text-blue-200'>
                Privacy Policy
              </a>
              <a href='#privacy' className='py-2 hover:text-blue-200'>
                more
              </a>
              <a
                href='#sign-up'
                className='py-2 mt-2 bg-white text-blue-600 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center'
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
