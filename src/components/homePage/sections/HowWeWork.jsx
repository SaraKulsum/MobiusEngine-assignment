import React from 'react';
import ProcessCard from '../cards/ProcessCard';

const HowWeWork = () => {
  const steps = [
    {
      number: '1',
      title: 'Submit Intake Form',
    },
    {
      number: '2',
      title: 'Get the most out of your consultation call',
    },
    {
      number: '3',
      title: 'We optimize your job application materials',
    },
    {
      number: '4',
      title: 'You get the interviews',
    },
  ];

  return (
    <section className='px-[2rem] lg:px-[180px] py-[70px]'>
      <div className='container mx-auto'>
        <h2 className='text-[#0649E7]  mb-12 text-2xl md:text-3xl lg:text-[2.5rem]'>
          How we work?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {steps.map((step) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              title={step.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
