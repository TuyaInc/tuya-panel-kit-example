import { Svg } from '@components';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useHistory } from 'umi';
import { routes } from '../routes';

const PageHome: React.FC = () => {
  const history = useHistory();
  const goto = (componentName: string) => {
    history.push(componentName);
  };
  return (
    <View>
      <View style={styles.head}>
        <Image
          style={styles.head_logo}
          source={{
            uri:
              'https://images.tuyacn.com/rms-static/3dec3ee0-b3d9-11eb-9adb-1b12f902f79d-1620903119310.png?tyName=210513tuya.png',
          }}
        />
        <Text style={styles.head_title}>Tuya Design</Text>
      </View>
      <View style={styles.list}>
        {routes.map(item => (
          <TouchableOpacity
            key={item.name}
            style={styles.list_item}
            onPress={() => {
              goto(item.href);
            }}
          >
            {item.name}
            {Svg.right}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 44,
  },
  head_logo: {
    width: 98,
    height: 49,
    resizeMode: 'contain',
  },
  head_title: {
    fontSize: 16,
    marginTop: 16,
  },
  list: {
    paddingHorizontal: 24,
  },
  list_item: {
    height: 58,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default PageHome;
