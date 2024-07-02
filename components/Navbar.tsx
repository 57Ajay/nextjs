// components/Navbar.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/contexts/theme-context';

const Navbar = () => {
  const { dark, toggleDarkMode } = useTheme();

  return (
    <nav className={`p-4 ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
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
          <button onClick={toggleDarkMode}>
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
