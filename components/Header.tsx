import Image from 'next/image';
import React from 'react';
import logo from '@/assets/disney-logo.png';
import Link from 'next/link';
import { ThemeToggler } from './ThemeToggler';
import SearchInput from './SearchInput';
import GenreDropDown from './GenreDropDown';

function Header() {
  return (
    <header className='fixed w-full z-50 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
      <Link className='mr-10' href={'/'}>
        <Image
          src={logo}
          alt='Disney+'
          width={120}
          className='cursor-pointer invert'
        />
      </Link>
      <div className='flex space-x-2'>
        <GenreDropDown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
