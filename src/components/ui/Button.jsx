import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseClasses =
    'px-4 py-2 rounded-full font-medium transition-all duration-150 hover:cursor-pointer hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[#0649E7] text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-white text-[#022183]  focus:ring-blue-500',
    outline: 'border border-[#0649E7] text-[#0649E7]  focus:ring-blue-500 ',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
