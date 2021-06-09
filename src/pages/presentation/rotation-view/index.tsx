import React from 'react';
import { View } from 'react-native';
import { IconFont, RotationView, TYText } from 'tuya-panel-kit';

import { ListView } from '@components';
import Strings from '@i18n';

export default () => {
  return (
    <ListView
      contentCenter={true}
      list={[
        {
          title: Strings.getLang('rotationview_round'),
          content: (
            <RotationView style={{ width: 160, height: 160, marginTop: 20 }} active={true}>
              <View
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: 80,
                  backgroundColor: '#0ff',
                  justifyContent: 'center',
                }}
              >
                <IconFont name="power" size={48} color="#ff0" />
              </View>
            </RotationView>
          ),
        },
        {
          title: Strings.getLang('rotationview_circle'),
          content: (
            <RotationView style={{ width: 160, height: 160, marginTop: 40 }} active={true}>
              <View
                style={{
                  width: 140,
                  height: 140,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                }}
              >
                <TYText style={{ textAlign: 'center' }}>Rotation!!!</TYText>
              </View>
            </RotationView>
          ),
        },
      ]}
    />
  );
};
