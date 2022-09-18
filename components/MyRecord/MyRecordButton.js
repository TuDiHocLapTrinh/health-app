import React from 'react';
import Image from 'next/image';

const MyRecordButton = ({ image, engText, jpText }) => {
  return (
    <div className=' w-72 h-72 border-[24px] border-[#FFCC21] relative bg-ha-dark-600 mt-14 hover:opacity-80 cursor-pointer'>
      <div className='relative w-full h-full mix-blend-luminosity overflow-hidden opacity-25 grayscale-[100%]'>
        <Image
          src={image}
          priority
          alt={engText}
          objectFit='cover'
          layout='fill'
        />
      </div>
      <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div
          className=' font-normal text-2xl filter-none'
          style={{ color: '#FFCC21' }}
        >
          {engText}
        </div>
        <div className=' w-40 bg-ha-primary-400 px-2 py-[1px] text-sm font-light mt-[11px] mx-auto text-white'>
          {jpText}
        </div>
      </div>
    </div>
  );
};

export default MyRecordButton;
