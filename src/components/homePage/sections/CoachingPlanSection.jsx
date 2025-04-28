import React from 'react';
import PricingCard from '../cards/PricingCard';

const CoachingPlanSection = () => {
  const pricingPlans = [
    {
      title: 'Resume Rebuild',
      subHeading:
        'Crafted for senior to VP-level professionals ready for their next big step.',
      price: '1000',
      period: 'one time',
      features: [
        '3× 30-min coaching ',
        'Focused on storytelling, not just formatting',
        'Analyst + full application team on Pacific hours',
        'Tailored to your target industry, company, or role',
        'Direct work with our co-founder (ex-Google, JP Morgan)',
        'Executive coaching from UC Berkeley alum with 10+ yrs experience',
        'Resume Rebuild portfolio available upon request',
      ],
      popular: false,
      buttonText: 'Get Started',
    },
    {
      title: 'Interview Prep',
      subHeading:
        'Two sessions to sharpen your story, confidence, and clarity — fast.',
      price: '500',
      period: 'one time',
      features: [
        '2× 45-min live coaching with our co-founder',
        'Real-time, practical feedback',
        'Build clarity, empathy & executive presence',
        'For senior and leadership roles — technical & non-technical',
      ],
      popular: false,
      buttonText: 'Get Started',
    },
  ];
  return (
    <section className='px-[2rem] lg:px-[180px] py-[70px]'>
      <div className='container mx-auto'>
        <h2 className='text-[#0649E7] mb-12 text-2xl md:text-3xl lg:text-[2.5rem]'>
          Resume Building & Coaching
        </h2>
        <h3></h3>

        <div className='flex flex-row gap-10 flex-wrap justify-center '>
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              subHeading={plan.subHeading}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              popular={plan.popular}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingPlanSection;
