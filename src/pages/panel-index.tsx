import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/core';

const HomePage: React.FC = () => {
  const navigation = useNavigation();

  const goto = (componentName: string) => {
    navigation.navigate(componentName);
  };

  return <View>home</View>;
};

export default HomePage;
