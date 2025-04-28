import React from 'react';

const ProcessCard = ({ number, title }) => {
  return (
    <div className='flex flex-col items-center text-center p-6'>
      <div className='rounded-full p-3 border-[2px] border-[#022183]  w-20 h-20 flex items-center justify-center '>
        <span className='text-3xl lg:text-5xl font-normal'>{number}</span>
      </div>
      <hr className='bg-[#0649E7] h-[2px] w-full my-4' />
      <h4 className='text-lg lg:text-xl font-medium text-[#0649E7] mb-2'>
        {title}
      </h4>
    </div>
  );
};

export default ProcessCard;
