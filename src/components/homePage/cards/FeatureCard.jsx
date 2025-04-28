import React from 'react';
import LogoIconSvg from '../../svg/LogoIconSvg';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className='border border-[#022183] rounded-3xl p-8 bg-white'>
      <div className='mb-8'>
        {/* <LogoIconSvg className='text-[#0649E7] h-8 w-auto' /> */}
        <img src={image} alt='title' />
      </div>
      <h3 className='text-[#022183] font-semibold text-xl mb-4'>{title}</h3>
      <p className='text-[#022183] text-base lg:text-lg'>{description}</p>
    </div>
  );
};

export default FeatureCard;
