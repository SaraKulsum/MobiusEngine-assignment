import React from 'react';
import PricingCard from '../cards/PricingCard';

const ServicePlanSection = () => {
  const pricingPlans = [
    {
      title: 'April Promo',
      price: '35',
      period: '/week',
      features: [
        'Curated jobs from 1M+ listings, refreshed every 48 hours',
        'Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)',
        'Need more? Add extra apps for just $1.5 each',
        'Your own dedicated application analyst',
        'Personalized with up to 10 filters & 5 job titles',
      ],
      popular: false,
      buttonText: 'Get Started',
    },
    {
      title: 'Starter',
      price: '50',
      period: '/week',
      features: [
        'All the perks of the Promo Plan, plus:',
        'Resume review & story-focused feedback',
        'Dedicated search specialist',
        'Up to 50 job apps/week',
        'Extra apps at $1.5 each',
        'Analyst support within 6 hours (SLA/PST hours)',
      ],
      popular: true, // this is marked "Popular" in your design
      buttonText: 'Get Started',
    },
    {
      title: 'Plus',
      price: '100',
      period: '/week',
      features: [
        'Everything in Starter, with more muscle:',
        'Up to 75 apps/week',
        'Apply to 15 job titles',
        'Analyst + full application team on Pacific hours',
      ],
      popular: false,
      buttonText: 'Get Started',
    },
    {
      title: 'Advance',
      price: '150',
      period: '/week',
      features: [
        'Everything in Plus',
        'Custom Resumes & Cover Letters',
        '20 fully customized applications/week',
        'Help with complex job searches',
        'Access to senior resume experts, Founder & Exec Coaches',
      ],
      popular: false,
      buttonText: 'Get Started',
    },
  ];

  return (
    <section className='px-[2rem] lg:px-[180px] py-[70px]'>
      <div className='container mx-auto'>
        <h2 className='text-[#0649E7] mb-12 text-2xl md:text-3xl lg:text-[2.5rem]'>
          Job Application Service Plans
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3  gap-10 text-center'>
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
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

export default ServicePlanSection;
