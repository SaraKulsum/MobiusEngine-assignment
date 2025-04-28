import UpRightArrowSvg from '../../svg/UpRightArrowSvg';

const TestimonialCard = () => {
  return (
    <div className='w-[280px] h-full flex flex-col rounded-3xl border-[2px] border-[#0649E7] overflow-hidden'>
      {/* Top section with play button */}
      <div className='bg-white p-16 flex-1 flex items-center justify-center rounded-t-3xl'>
        <button
          className='w-12 h-12 rounded-full bg-[#0649E7] flex items-center justify-center'
          aria-label='Play video'
        >
          <img src='/assets/icons/play.svg' alt='play' />
        </button>
      </div>

      {/* Bottom section with text */}
      <div className='bg-[#0649E7] p-3 text-white'>
        <p className='text-base lg:text-lg'>
          Holly is a <span className='font-bold'>senior executive</span> who got
          over <span className='font-bold'>10 job interviews</span> and an offer
          she accepted
        </p>

        {/* Arrow button */}
        <div className='flex justify-end mt-2'>
          <button
            className='w-10 h-10 rounded-full bg-white flex items-center justify-center'
            aria-label='Learn more'
          >
            <UpRightArrowSvg className='text-[#0649E7] h-3 w-auto' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
