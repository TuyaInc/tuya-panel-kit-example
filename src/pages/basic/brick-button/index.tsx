import React from 'react';
import { BrickButton } from 'tuya-panel-kit';

import { ListView } from '@components';
import Strings from '@i18n';

export default () => {
  return (
    <ListView
      list={[
        {
          title: Strings.getLang('brick_button_text'),
          content: <BrickButton text="loading" loading={true} />,
        },
        {
          title: Strings.getLang('brick_button_text'),
          content: (
            <BrickButton
              loading={true}
              loadingSize="large"
              type="primaryGradient"
              background={{
                x1: '0%',
                y1: '0%',
                x2: '0%',
                y2: '100%',
                stops: {
                  '0%': 'red',
                  '30%': 'blue',
                  '100%': 'yellow',
                },
              }}
            />
          ),
        },
      ]}
    />
  );
};
