import React from 'react';
import { View, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/core';

const Home: React.FC = () => {
  // const navigation = useNavigation();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('button');
        }}
      >
        button
      </TouchableOpacity>
    </View>
  );
};

export default Home;
