import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';
import Button from '../../ui/Button';
import UpRightArrowSvg from '../../svg/UpRightArrowSvg';
import RightArrowSvg from '../../svg/RightArrowSvg';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'This is a sample testimonial and got me a job in 20 days. The team helped me completely transform my resume.',
      author: 'John D.',
      position: 'Software Engineer',
    },
    {
      id: 2,
      quote:
        "A sample testimonial got me a job in less than a month. I can't believe how effective the resume makeover was.",
      author: 'Sarah M.',
      position: 'Marketing Manager',
    },
    {
      id: 3,
      quote:
        'This sample testimonial shows how I landed multiple interviews after using this service. Worth every penny.',
      author: 'Michael R.',
      position: 'Financial Analyst',
    },
  ];

  return (
    <section className=' bg-gray-50' id='testimonials'>
      <div className='container mx-auto px-[2rem] lg:px-[180px] py-[70px]'>
        <h2 className='text-[#0649E7] mb-12 text-2xl md:text-3xl lg:text-[2.5rem]'>
          What our clients have to say
        </h2>
        <div className='flex flex-wrap gap-7 lg:gap-10 justify-center'>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
            />
          ))}
        </div>
        <div className='flex flex-col md:flex-row gap-7 md:gap-12 justify-center items-center mt-10  '>
          <Button variant='outline' className='w-fit'>
            <span className='flex items-center gap-2'>
              View customer testimonials{' '}
              <UpRightArrowSvg className='text-[#0649E7] h-3 w-auto' />
            </span>
          </Button>
          <Button variant='primary' className='w-fit'>
            <span className='flex items-center gap-2'>
              Get Started <RightArrowSvg className='w-[1em] h-[1em]' />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
