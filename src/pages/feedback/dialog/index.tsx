import React from 'react';
import { Text, View } from 'react-native';
import { Dialog } from 'tuya-panel-kit';

import { BlockList, Svg } from '@components';
import { useSetParticalState } from '@hooks';

export default () => {
  const [state, setState] = useSetParticalState({
    promptUnControlled: '',
    promptControlled: '',
    checkValueRadio: 'code1',
    checkValueSwitch: ['code1'],
  });
  return (
    <BlockList
      list={[
        {
          name: '警告框',
          onPress: () =>
            Dialog.alert({
              title: '标题',
              subTitle: '副标题',
              confirmText: '确认',
              onConfirm: (data, { close }) => {
                close();
              },
            }),
          component: <>{Svg.right}</>,
        },
        {
          name: '提示框',
          onPress: () =>
            Dialog.confirm({
              title: '标题',
              subTitle: '副标题',
              cancelText: '取消',
              confirmText: '确认',
              onConfirm: (data, { close }) => {
                close();
              },
            }),
          component: <>{Svg.right}</>,
        },
        {
          name: '输入对话框（非受控）',
          onPress: () =>
            Dialog.prompt({
              title: '非受控输入框',
              subTitle: '副标题',
              cancelText: '取消',
              confirmText: '确认',
              defaultValue: state.promptUnControlled,
              placeholder: 'Password',
              onConfirm: (text, { close }) => {
                setState({ promptUnControlled: text });
                close();
              },
            }),
          component: <>{Svg.right}</>,
        },
        {
          name: '输入对话框（受控）',
          component: <>{Svg.right}</>,
          onPress: () =>
            Dialog.prompt({
              title: '受控输入框',
              subTitle: '副标题',
              cancelText: '取消',
              confirmText: '确认',
              value: state.promptControlled,
              placeholder: 'Password',
              onChangeText: text => {
                // 使用value props 可令prompt成为受控组件，控制其输入框内容
                const t = +text;
                if (typeof t === 'number' && !Number.isNaN(t)) {
                  return text;
                }
              },
              onConfirm: (text, { close }) => {
                console.log('controlled text :', text);
                setState({ promptControlled: text });
                close();
              },
            }),
        },
        {
          name: '单选对话框',
          component: <>{Svg.right}</>,
          onPress: () =>
            Dialog.checkbox({
              title: 'Required',
              cancelText: '取消',
              confirmText: '确认',
              type: 'radio',
              value: state.checkValueRadio,
              dataSource: [
                {
                  value: 'code1',
                  title: '传感器选择',
                },
                {
                  value: 'code2',
                  title: '房间传感器校准',
                },
                {
                  value: 'code3',
                  title: '地板传感器校准',
                  iconSize: 24,
                  Icon: 'warning',
                  reverse: true,
                  hideOnUnselect: true,
                },
              ],
              onConfirm: (value, { close }) => {
                setState({ checkValueRadio: value });
                close();
              },
            }),
        },
        {
          name: '多选对话框',
          component: <>{Svg.right}</>,
          onPress: () =>
            Dialog.checkbox({
              title: 'Required',
              cancelText: '取消',
              confirmText: '确认',
              type: 'switch',
              value: state.checkValueSwitch,
              dataSource: [
                {
                  value: 'code1',
                  title: '传感器选择',
                },
                {
                  value: 'code2',
                  title: '房间传感器校准',
                },
                {
                  value: 'code3',
                  title: '地板传感器校准',
                },
                {
                  value: 'code4',
                  title: '自适应功能',
                },
                {
                  value: 'code5',
                  title: '防冻保护功能',
                  iconSize: 20,
                  Icon: 'warning',
                  reverse: true,
                  hideOnUnselect: true,
                },
                {
                  value: 'code6',
                  title: '测试滚动功能',
                  reverse: true,
                },
              ],
              onConfirm: (value, { close }) => {
                setState({ checkValueSwitch: value });
                close();
              },
            }),
        },
        {
          name: '列表对话框',
          component: <>{Svg.right}</>,
          onPress: () =>
            Dialog.list({
              title: '这是标题',
              subTitle: '这是内容',
              dataSource: new Array(6).fill(1).map((_, idx) => ({
                title: idx === 0 ? '点我关闭' : `选项${idx}`,
                onPress: () => {
                  idx === 0 && Dialog.close();
                  console.log('Press', idx);
                },
              })),
              cancelText: '取消',
              confirmText: '确认',
              onConfirm: (data, { close }) => {
                close();
              },
            }),
        },
        {
          name: '自定义对话框',
          component: <>{Svg.right}</>,
          onPress: () =>
            Dialog.custom({
              title: 'Custom',
              cancelText: '取消',
              confirmText: '确认',
              content: (
                <View style={{ height: 300, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 32, color: '#000' }}>自定义内容</Text>
                </View>
              ),
              onConfirm: (data, { close }) => {
                close();
              },
            }),
        },
      ]}
    />
  );
};
