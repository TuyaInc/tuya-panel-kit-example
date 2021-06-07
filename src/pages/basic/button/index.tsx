import React from 'react';
import { Button, Utils } from 'tuya-panel-kit';

import { ListView } from '@components';

const { convertX } = Utils.RatioUtils;

export default () => {
  return (
    <ListView
      list={[
        {
          title: '纯文本按钮',
          content: <Button text="点我一下" />,
        },
        {
          title: '纯icon按钮',
          content: <Button icon="power" />,
        },
        {
          title: '带icon的文字按钮',
          content: (
            <>
              <Button icon="selected" iconSize={24} text="文字" />
              <Button
                icon="selected"
                textDirection="right"
                iconSize={24}
                text="文字"
                style={{
                  marginLeft: convertX(27),
                }}
              />
            </>
          ),
        },
      ]}
    />
  );
};
