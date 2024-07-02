// components/Navbar.tsx
'use client';
import useTheme from '@/components/themeContextValueGetter';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const dark = useTheme();
  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <nav>
      <ul>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="link-container">
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

