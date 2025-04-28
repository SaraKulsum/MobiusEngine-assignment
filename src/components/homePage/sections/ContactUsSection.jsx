import React from 'react';
import RightArrowSvg from '../../svg/RightArrowSvg';

const ContactUsSection = () => {
  return (
    <section className='px-[2rem] lg:px-[180px] py-[70px]'>
      <a href='/' className='group'>
        <div className='container mx-auto bg-[#0649E7] text-white rounded-4xl p-6 lg:p-8'>
          <div className='flex flex-col gap-4 md:flex-row justify-between items-center py-14 md:py-28 '>
            <span className='text-xl lg:text-3xl font-medium'>
              STILL HAVE <br /> DOUBTS?
            </span>
            <h3 className='font-semibold text-3xl md:text-4xl lg:text-6xl capitalize'>
              Contact Us
            </h3>
            <button className='rounded-full h-[100px] w-[100px] bg-white text-[#0649E7] flex justify-center items-center'>
              <RightArrowSvg className='h-12 w-12 transition-all duration-600 group-hover:translate-x-3' />
            </button>
          </div>
        </div>
      </a>
    </section>
  );
};

export default ContactUsSection;
