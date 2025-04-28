import React from 'react';
import LogoTextSvg from '../svg/LogoTextSvg';
import LogoIconSvg from '../svg/LogoIconSvg';
<img src='assets/logo/logo.png' alt='InterviewSight' className='h-8' />;
const Footer = () => {
  return (
    <footer className='w-full'>
      {/* Main footer content */}
      <div className='max-w-6xl mx-auto px-4 py-8'>
        {/* Logo and contact info section */}
        <div className='mb-6'>
          {/* Logo */}
          <div className='mb-8'>
            <LogoIconSvg className='text-[#0649E7] h-8 w-auto' />
            <LogoTextSvg className='text-[#0649E7] h-6 w-auto' />
          </div>

          {/* Divider line */}
          <hr className='border-t border-gray-200 w-[30%]' />

          {/* Contact info grid */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-6'>
            {/* Address */}
            <div>
              <h5 className='text-sm   text-[#0649E7] mb-2'>Address</h5>
              <p className='text-base text-[#0649E7]'>
                975 Mission St Ste 103 #450
                <br />
                San Francisco, CA 94103
              </p>
            </div>

            {/* Email */}
            <div>
              <h4 className='text-sm font-medium text-[#0649E7] mb-2'>Email</h4>
              <a
                href='mailto:finance@mobulsengine.ai'
                className='text-sm text-blue-600 hover:underline'
              >
                finance@mobulsengine.ai
              </a>
            </div>

            {/* Telephone */}
            <div>
              <h4 className='text-sm font-medium text-[#0649E7] mb-2'>
                Telephone
              </h4>
              <a href='tel:650-889-6026' className='text-sm text-[#0649E7]'>
                650-889-6026
              </a>
            </div>

            {/* Socials */}
            <div>
              <h4 className='text-sm font-medium text-[#0649E7] mb-2'>
                Socials
              </h4>
              <div className='flex gap-2'>
                <a
                  href='#'
                  className='w-8 h-8 rounded-full border bg-[#0649E7] border-gray-300 flex items-center justify-center'
                  aria-label='LinkedIn'
                >
                  <img
                    src='/assets/icons/linkedIn.svg'
                    alt='linkedIn handle'
                    className='h-4'
                  />
                </a>
                <a
                  href='#'
                  className='w-8 h-8 rounded-full border bg-[#0649E7] border-gray-300 flex items-center justify-center'
                  aria-label='LinkedIn'
                >
                  <img
                    src='/assets/icons/linkedIn.svg'
                    alt='linkedIn handle'
                    className='h-4'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and links bottom bar */}
      <div className='bg-blue-600 py-2 text-white'>
        <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm'>© 2023 Mobulsservices LLC</p>
          <div className='flex gap-6'>
            <a href='#' className='text-sm hover:underline'>
              Terms & Conditions
            </a>
            <a href='#' className='text-sm hover:underline'>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
