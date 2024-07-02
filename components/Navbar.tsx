// components/Navbar.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/contexts/theme-context';

const Navbar = () => {
  const { dark, toggleDarkMode } = useTheme();

  return (
    <nav className={`p-4 justify-between`}>
      <ul className="flex justify-between items-center">
        <div className="logo">
          <h1 className='pr-2'>Logo</h1>
        </div>
        <div className="link-container flex">
          <Link className="pr-2" href="/">
            Home
          </Link>
          <Link className="pr-2" href="/about">
            AboutMe
          </Link>
          <Link className="pr-2" href="/portfolio">
            Portfolio
          </Link>
        </div>
        <div className="toggle-container">
          <button
            onClick={toggleDarkMode}
            className={`p-2 ${dark ? 'bg-white text-black rounded font-semibold' : 'bg-zinc-700 text-grey-300 rounded font-semibold'}`}
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
