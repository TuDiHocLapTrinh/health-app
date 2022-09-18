import SvgIcon from '../SvgIcon';
import React from 'react';

const Bubbles = () => {
  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className='h-12 w-12 fixed bottom-20 rounded-full border right-10 flex justify-center items-center hover:bg-ha-primary-400 border-ha-gray-500'
      onClick={onClick}
    >
      <SvgIcon name='arrow' />
    </button>
  );
};

export default Bubbles;
