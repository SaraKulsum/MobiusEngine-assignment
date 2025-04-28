import FeatureCard from '../cards/FeatureCard';

const FeatureSection = () => {
  const features = [
    {
      title: 'Tried, Tested, Trusted',
      description:
        "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.",
      image: '/assets/icons/trust.svg',
    },
    {
      title: 'Real People, Real Help',
      description:
        'A hands-on team that actually cares — guiding you through every twist in your career path.',
      image: '/assets/icons/help.svg',
    },
    {
      title: 'Beat the Line',
      description:
        'We search, shortlist, and apply for you, so your name shows up first — every single day.',
      image: '/assets/icons/star.svg',
    },
  ];

  return (
    <section className='bg-[#F8FAFF]   mx-[1rem] lg:mx-[90px] px-[1em] lg:px-[90px] py-[70px] rounded-4xl  '>
      <div className='  '>
        <h2 className='text-[#022183] mb-12 text-2xl md:text-3xl lg:text-[2.5rem]'>
          Why Choose Us?
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
