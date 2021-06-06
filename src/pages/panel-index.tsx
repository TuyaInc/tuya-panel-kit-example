import React from 'react';

import { useNavigation } from '@react-navigation/core';

import PageHome from './home';

const HomePage: React.FC = () => {
  const navigation = useNavigation();

  const goto = (componentName: string) => {
    navigation.navigate(componentName);
  };

  return <PageHome navigate={goto} />;
};

export default HomePage;
