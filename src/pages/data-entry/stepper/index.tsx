import React from 'react';
import { Stepper } from 'tuya-panel-kit';

import { BlockView } from '@components';

export default () => {
  return (
    <BlockView
      list={[
        {
          title: '风格一',
          list: [
            {
              name: '默认用法',
              component: <Stepper value={0} editable={false} />,
            },
            {
              name: '禁用样式',
              component: <Stepper value={21} disabled={true} />,
            },
            {
              name: '小数点样式',
              component: (
                <Stepper value={93.5} stepValue={0.5} inputStyle={{ width: 40 }} editable={false} />
              ),
            },
            {
              name: '可输入状态',
              component: <Stepper value={99} stepValue={5} />,
            },
          ],
        },
        {
          title: '风格二',
          list: [
            {
              name: '默认用法',
              component: <Stepper buttonType="triangle" value={0} editable={false} />,
            },
            {
              name: '禁用样式',
              component: <Stepper value={24} buttonType="triangle" disabled={true} />,
            },
            {
              name: '小数点样式',
              component: (
                <Stepper
                  value={93.5}
                  stepValue={0.5}
                  inputStyle={{ width: 40 }}
                  buttonType="triangle"
                  editable={false}
                />
              ),
            },
            {
              name: '可输入状态',
              component: <Stepper value={99} stepValue={5} buttonType="triangle" />,
            },
          ],
        },
      ]}
    />
  );
};
