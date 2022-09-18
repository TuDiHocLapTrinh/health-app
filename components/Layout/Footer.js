import React from 'react';
import Link from 'next/link';
import { footerLinkData } from '~/mocks';

const Footer = () => {
  return (
    <footer className='flex items-center w-full h-32 bg-ha-dark-500 xl:pl-40 md:pl-20 pl-2'>
      <ul className='flex items-center justify-start w-full'>
        {footerLinkData.map((item, index) => (
          <li
            key={index}
            className='md:mr-[45px] mr-1 text-white text-xs font-light hover:underline'
          >
            <Link href={item.link}>
              <a>{item.content}</a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
