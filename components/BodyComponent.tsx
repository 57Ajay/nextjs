// components/BodyComponent.tsx
'use client';
import React from 'react';
import { useTheme } from '@/components/contexts/theme-context';

const BodyComponent = ({ children }: { children: React.ReactNode }) => {
  const { dark } = useTheme();
  return (
    <body className={`${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {children}
    </body>
  );
};

export default BodyComponent;
