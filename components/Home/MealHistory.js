import moment from 'moment';
import Image from 'next/image';
import React from 'react';

const MealHistory = ({ image, date, type }) => {
  return (
    <div className='relative h-[234px]'>
      <Image src={image} layout='fill' priority alt={type} objectFit='cover' />
      <span className='absolute bottom-0 px-2 py-1 text-white text-sm bg-ha-primary-300'>
        {moment(date, 'YYYY-MM-DD').format('MM.DD')}
        {`.${type}`}
      </span>
    </div>
  );
};

export default MealHistory;
