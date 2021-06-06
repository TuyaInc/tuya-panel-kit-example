import React from 'react';
import { useHistory } from 'umi';

import PageHome from './home';

const HomePage: React.FC = () => {
  const history = useHistory();

  const goto = (componentName: string) => {
    history.push(componentName);
  };

  return <PageHome navigate={goto} />;
};

export default HomePage;
