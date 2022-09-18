import React from 'react';

const RecommendButton = ({ engText, jpText }) => {
  return (
    <button className='mt-14 w-[216px] h-36 bg-ha-dark-600 flex flex-col justify-start text-center pt-6 pl-6 pr-6 hover:opacity-80'>
      <div className=' text-xl font-normal mb-2' style={{ color: '#FFCC21' }}>
        {engText}
      </div>
      <hr className='w-14 self-center mb-2' />
      <div className=' text-white font-light text-lg self-center'>{jpText}</div>
    </button>
  );
};

export default RecommendButton;
