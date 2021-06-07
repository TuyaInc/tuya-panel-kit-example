import React from 'react';
import { Button, Utils } from 'tuya-panel-kit';

import { ListView } from '@components';
import Strings from '@i18n';

const { convertX } = Utils.RatioUtils;

export default () => {
  return (
    <ListView
      list={[
        {
          title: Strings.getLang('pure_text_button'),
          content: <Button text={Strings.getLang('click_me_once')} />,
        },
        {
          title: Strings.getLang('pure_icon_button'),
          content: <Button icon="power" />,
        },
        {
          title: Strings.getLang('with_text_icon_button'),
          content: (
            <>
              <Button icon="selected" iconSize={24} text={Strings.getLang('text')} />
              <Button
                icon="selected"
                textDirection="right"
                iconSize={24}
                text={Strings.getLang('text')}
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
