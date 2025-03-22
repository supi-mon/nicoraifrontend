'use client';

import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { LayoutProps } from './type';

const Desktop = memo<LayoutProps>(({ children }) => {
  return (
    <Flexbox
      flex={1}
      height="100%"
      style={{
        overflow: 'hidden',
      }}
      width="100%"
    >
      {children}
    </Flexbox>
  );
});

Desktop.displayName = 'DashboardDesktopLayout';

export default Desktop;
