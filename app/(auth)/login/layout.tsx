import LogPath from '@/components/log-paths/log-path';
import Link from 'next/link';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className='text-center'>
      <LogPath />
      <div className='container border-2 border-red-700 p-4 mt-2'>
      {children}
      </div>
    </div>
  );
};

export default Layout;
