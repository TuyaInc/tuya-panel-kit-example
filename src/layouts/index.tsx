import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'umi';

import { TuyaWrapper } from '../components';
import { routes } from '../routes';

export default ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const title = useMemo(() => routes.find(route => route.href === location.pathname)?.name, [
    location.pathname,
  ]);
  return (
    <TuyaWrapper title={title} hideTopbar={isHome} onBack={() => history.goBack()}>
      {children}
    </TuyaWrapper>
  );
};
