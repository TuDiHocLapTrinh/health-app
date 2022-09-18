import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const RecommedPhoto = ({ image, date, time, content, hashtag }) => {
  return (
    <div className='mb-6'>
      <div className='relative w-full h-36'>
        <Image
          src={image}
          layout='fill'
          alt={content}
          objectFit='cover'
          priority
        />
        <div className='absolute bottom-0 text-white text-sm bg-ha-primary-300'>
          {moment(date, 'YYYY-MM-DD').format('MM.DD')}
          {` ${time}`}
        </div>
      </div>
      <div className=' text-black text-sm font-light line-clamp-1'>
        <Link href='/'>
          <a className='hover:underline'>{content}</a>
        </Link>
      </div>
      <div
        className=' text-black text-xs font-light'
        style={{ color: '#FF963C' }}
      >
        {hashtag.map((item, index) => (
          <Link key={index} href='/'>
            <a className='hover:underline'>#{item}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommedPhoto;
