'use client';

import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { LayoutProps } from './type';

const Mobile = memo<LayoutProps>(({ children }) => {
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

Mobile.displayName = 'DashboardMobileLayout';

export default Mobile;
