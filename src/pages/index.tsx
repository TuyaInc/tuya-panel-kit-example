import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'umi';

const Home: React.FC = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text> aas</Text>
      <Link to="/button">button</Link>
    </View>
  );
};

export default Home;
