import React from 'react';

import heroImage from '/assets/homePage/book.png';
import Button from '../../ui/Button';
import BottomLeftArrowSvg from '../../svg/BottomLeftArrowSvg';
import RightArrowSvg from '../../svg/RightArrowSvg';

const HeroSection = () => {
  return (
    <section className='bg-[url("/assets/homePage/heroGradient.png")]   bg-no-repeat h-screen  bg-cover bg-center    text-white '>
      <div className='container flex justify-center items-center min-w-full min-h-full   px-[2rem] lg:px-[180px]  py-[70px]'>
        <div className='flex flex-col  lg:flex-row gap-6 lg:gap-3 items-center justify-between w-full  '>
          <div className='w-full lg:w-[75%]'>
            <h1 className='tracking-tight text-4xl md:text-5xl  lg:text-7xl'>
              Land job interviews <br />
              <span className='text-[#0649E7]'>10x</span> faster
            </h1>
            <p className='text-base lg:text-lg mt-4 mb-8 text-[#FEFEFE]'>
              Custom-built resumes that match your goals, keywords, and
              recruiter expectations.
            </p>
            <Button
              variant='secondary'
              className='rounded-full text-lg px-8 py-3'
            >
              <span className='flex items-center gap-2'>
                Get Started <RightArrowSvg className='w-[1em] h-[1em]' />
              </span>
            </Button>
          </div>

          <div className='w-full lg:w-[20%] flex justify-center lg:justify-end '>
            <div className='relative h-full'>
              <img
                src='/assets/homePage/hero-img.png'
                alt='hero img'
                className='h-[220px] lg:min-h-[250px] w-auto aspect-auto'
              />

              <a
                href='https://drive.google.com/file/d/1v-LCTCc3yMW3gAGHXbrwNYs4C0C7oblf/view'
                target='_blank'
                className='group'
              >
                {/* Book Icon */}
                <div className='absolute -bottom-[25px] -right-[25px] '>
                  <div className='relative rounded-full backdrop-blur-sm p-4 border-[1px] '>
                    <img
                      src='/assets/homePage/book.png'
                      alt='Book'
                      className='h-[50px] w-auto aspect-auto'
                    />
                    <div className='rounded-full bg-white absolute left-1.5 p-[6px]'>
                      <BottomLeftArrowSvg className='text-[#0649E7]' />
                    </div>
                  </div>
                </div>

                {/* Download Text */}
                <div className='absolute -bottom-[2.5rem] right-[30%] text-xs transition-all duration-100 group-hover:scale-[1.05]'>
                  Download Free E-Book
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
