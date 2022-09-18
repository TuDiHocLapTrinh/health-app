import React from 'react';

const ButtonSeeMore = ({ name }) => {
  return (
    <button
      className='text-white font-light text-lg h-14 w-[296px] rounded'
      style={{
        background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
      }}
    >
      {name}
    </button>
  );
};

export default ButtonSeeMore;
