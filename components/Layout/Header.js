import SvgIcon from '../SvgIcon';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuData, navbarData } from '~/mocks';
import { useClickOutside } from '~/hooks';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef();

  useClickOutside(
    menuRef,
    () => {
      if (isOpenMenu) setIsOpenMenu(false);
    },
    'mousedown'
  );

  return (
    <nav className='h-16 bg-ha-dark-500 flex justify-center fixed w-full z-50 top-0 left-0'>
      <div className='flex justify-between max-w-screen-xl w-full'>
        <Link href='/'>
          <a className='flex justify-between hover:opacity-80'>
            <Image
              src='/logo.png'
              alt='logo'
              width={144}
              height={40}
              priority
              className='cursor-pointer'
            />
          </a>
        </Link>
        <ul className='flex items-center'>
          {navbarData.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                <a className='h-12 w-40 items-center cursor-pointer hover:opacity-80 hidden md:flex relative'>
                  <SvgIcon name={item.icon} className='relative' />
                  {item.icon === 'info' && (
                    <span className='absolute top-1 left-6 bg-ha-primary-500 w-4 h-4 rounded-full font-light text-[10px] text-center'>
                      1
                    </span>
                  )}
                  <span className='text-white ml-2 font-light text-base'>
                    {item.text}
                  </span>
                </a>
              </Link>
            </li>
          ))}
          <div className='mr-2 relative flex h-full items-center justify-center'>
            <button
              className='cursor-pointer hover:opacity-80'
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              {isOpenMenu ? <SvgIcon name='close' /> : <SvgIcon name='menu' />}
            </button>
            {isOpenMenu && (
              <ul
                ref={menuRef}
                className='absolute top-14 w-[280px] float-right bg-ha-gray-400 right-0 z-10 rounded-sm'
              >
                {menuData.map((item, index) => (
                  <li
                    key={index}
                    className='font-light text-lg text-white py-[23px] pl-8 h-[72px] border-b border-ha-gray-500 mix-blend-normal'
                  >
                    <Link href={item.link}>
                      <a>{item.text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
