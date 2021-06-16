import React from 'react';
import { SliderProgress, Utils } from 'tuya-panel-kit';

import { ListView } from '@components';
import Strings from '@i18n';
import { useSetParticalState } from '@hooks/useSetParticalState';

const { convertX: cx } = Utils.RatioUtils;

export default () => {
  const [state, setState] = useSetParticalState({ value: 6, values: [20, 90] });
  return (
    <ListView
      contentPadding={false}
      contentCenter={true}
      list={[
        {
          title: Strings.getLang('brick_button_text'),
          content: (
            <SliderProgress value={state.value} onValueChange={v => setState({ value: v })} />
          ),
        },
        {
          title: Strings.getLang('brick_button_text'),
          itemStyle: {
            marginTop: cx(40),
          },
          content: (
            <SliderProgress
              value={state.values}
              style={{ width: 300, height: 33 }}
              onValueChange={({ minValue, maxValue }) => {
                setState({
                  values: [minValue, maxValue],
                });
              }}
            />
          ),
        },
      ]}
    />
  );
};
