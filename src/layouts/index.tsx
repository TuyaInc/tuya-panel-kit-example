import React, { useMemo } from 'react';
import { useLocation } from 'umi';

import { usePostedPush } from '@hooks';

import { TuyaWrapper } from '../components';
import { routes } from '../routes';

export default ({ children }) => {
  const push = usePostedPush();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const title = useMemo(() => routes.find(route => route.href === location.pathname)?.name, [
    location.pathname,
  ]);
  return (
    <TuyaWrapper
      title={title}
      hideTopbar={isHome}
      onBack={() => {
        push('/');
      }}
    >
      {children}
    </TuyaWrapper>
  );
};
