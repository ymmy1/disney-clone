import Image from 'next/image';
import React from 'react';
import logo from '@/assets/disney-logo.png';
import Link from 'next/link';
import { ThemeToggler } from './ThemeToggler';
import SearchInput from './SearchInput';
import GenreDropDown from './GenreDropDown';

function Header() {
  return (
    <header className='fixed w-full z-50 top-0 flex items-start md:items-center justify-between p-2 md:p-5 bg-gradient-to-t  from-gray-800/0 via-gray-100/75 to-gray-100 dark:from-gray-200/0 dark:via-gray-900/25 dark:to-gray-900'>
      <Link className='mr-4' href={'/'}>
        <Image
          src={logo}
          alt='Disney+'
          width={120}
          className='cursor-pointer invert-0 dark:invert'
        />
      </Link>
      <div className='flex gap-2 flex-col md:flex-row items-end w-[30vw]'>
        <GenreDropDown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
