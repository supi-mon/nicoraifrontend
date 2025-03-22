'use client';

import React from 'react';
import { Flexbox } from 'react-layout-kit';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Flexbox
      gap={16}
      height="100%"
      padding={16}
      style={{
        overflow: 'hidden',
      }}
      width="100%"
    >
      {children}
    </Flexbox>
  );
};

export default DashboardLayout;
