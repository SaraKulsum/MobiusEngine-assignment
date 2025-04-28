import React from 'react';

const TeamMemberCard = ({ image, name, description, linkedinUrl }) => {
  return (
    <div className='flex flex-col  md:flex-row justify-center items-center gap-10 text-white max-w-[900px] mx-auto'>
      <div className='flex-shrink-0  mb-4 md:mb-0'>
        <a
          href={linkedinUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='   relative group '
        >
          <img
            src={image}
            alt={name}
            className='h-[250px] w-auto object-cover bg-white rounded-full border-0'
          />
          <div className='absolute right-1 rounded-full bottom-1 backdrop-blur-md p-4 border-[1px] border-[#FEFEFE] transition-all duration-200 group-hover:scale-[1.05] '>
            <img
              src='/assets/icons/linkedIn.svg'
              alt='linkedin-icon'
              className='h-[45px] w-auto aspect-auto'
            />
          </div>
        </a>
      </div>
      <div className='md:ml-6 flex-grow'>
        <p className='mt-3 text-[#FEFEFE] text-base lg:text-lg'>
          <strong>{description.split(' ')[0] + ' '}</strong>
          {description
            .split(' ')
            .slice(1)
            .join(' ')
            .split('\n')
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
