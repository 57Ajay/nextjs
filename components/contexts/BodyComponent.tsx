// components/BodyComponent.tsx
'use client';
import React from 'react';
import { useTheme } from '@/components/contexts/theme-context';

const BodyComponent = ({ children }: { children: React.ReactNode }) => {
  const { dark } = useTheme();
  return (
    <body className={`${dark ? 'bg-stone-900 text-white' : 'bg-slate-300 text-black'}`}>
      {children}
    </body>
  );
};

export default BodyComponent;
