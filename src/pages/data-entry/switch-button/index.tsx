import React from 'react';
import { View } from 'react-native';
import { SwitchButton } from 'tuya-panel-kit';

import { ListView } from '@components';
import Strings from '@i18n';

export default () => {
  const [value1, setValue1] = React.useState(true);
  const [value2, setValue2] = React.useState(false);
  return (
    <ListView
      list={[
        {
          title: Strings.getLang('switchbutton_style1'),
          content: (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <SwitchButton
                value={value1}
                onValueChange={v => setValue1(v)}
                style={{ marginRight: 14 }}
              />
              <SwitchButton value={value2} onValueChange={v => setValue2(v)} />
            </View>
          ),
        },
        {
          title: Strings.getLang('switchbutton_style2'),
          content: (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <SwitchButton
                value={value1}
                size={{ height: 18 }}
                theme={{ margin: 0 }}
                onValueChange={v => setValue1(v)}
                style={{ marginRight: 14 }}
              />
              <SwitchButton
                value={value2}
                size={{ height: 18 }}
                theme={{ margin: 0 }}
                onValueChange={v => setValue2(v)}
              />
            </View>
          ),
        },
        {
          title: Strings.getLang('switchbutton_style_dark'),
          content: (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <SwitchButton
                value={value1}
                tintColor="rgba(255,255,255,.2)"
                onValueChange={v => setValue1(v)}
                style={{ marginRight: 14 }}
              />
              <SwitchButton
                value={value2}
                tintColor="rgba(255,255,255,.2)"
                onValueChange={v => setValue2(v)}
              />
            </View>
          ),
        },
        {
          title: Strings.getLang('switchbutton_style_gradient'),
          content: (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <SwitchButton
                value={value1}
                onText=""
                offText=""
                tintColor="#E5E5E5"
                onTintColor={{
                  '0%': '#FA709A',
                  '100%': '#FEDD44',
                }}
                onValueChange={v => setValue1(v)}
                style={{ marginRight: 14 }}
              />
              <SwitchButton
                value={value2}
                onText=""
                offText=""
                tintColor="#E5E5E5"
                onTintColor={{
                  '0%': '#FA709A',
                  '100%': '#FEDD44',
                }}
                onValueChange={v => setValue2(v)}
              />
            </View>
          ),
        },
        {
          title: Strings.getLang('switchbutton_style_text'),
          content: (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <SwitchButton
                value={value1}
                onValueChange={v => setValue1(v)}
                tintColor="#E5E5E5"
                onTintColor={{
                  '0%': '#FA709A',
                  '100%': '#FEDD44',
                }}
                style={{ marginRight: 14 }}
              />
              <SwitchButton
                value={value2}
                onValueChange={v => setValue2(v)}
                tintColor="#E5E5E5"
                onTintColor={{
                  '0%': '#FA709A',
                  '100%': '#FEDD44',
                }}
              />
            </View>
          ),
        },
        {
          title: Strings.getLang('switchbutton_style_uncontrol'),
          content: (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <SwitchButton
                defaultValue={true}
                onValueChange={value => console.log(value)}
                style={{ marginRight: 14 }}
              />
              <SwitchButton defaultValue={false} onValueChange={value => console.log(value)} />
            </View>
          ),
        },
      ]}
    />
  );
};
