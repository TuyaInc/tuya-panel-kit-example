import React from 'react';
import { Rect } from 'react-native-svg';
import { LinearGradient } from 'tuya-panel-kit';

import { ListView } from '@components';
import Strings from '@i18n';

export default () => {
  return (
    <ListView
      contentCenter={true}
      list={[
        {
          title: Strings.getLang('lineargradient_two'),
          content: (
            <LinearGradient
              gradientId="Gradient1"
              style={{
                width: 300,
                height: 200,
                marginLeft: 24,
              }}
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
              stops={{
                '0%': 'red',
                '100%': 'yellow',
              }}
            >
              <Rect width={300} height={200} />
            </LinearGradient>
          ),
        },
        {
          title: Strings.getLang('lineargradient_obl'),
          itemStyle: {
            marginTop: 200,
          },
          content: (
            <LinearGradient
              gradientId="Gradient2"
              style={{ width: 300, height: 200, marginLeft: 24 }}
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
              stops={{
                '0%': 'red',
                '30%': 'blue',
                '100%': 'yellow',
              }}
            >
              <Rect width={300} height={200} />
            </LinearGradient>
          ),
        },
      ]}
    />
  );
};
