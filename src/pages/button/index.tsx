import React from 'react';
import { Text, View } from 'react-native';
import { Button, Dialog } from 'tuya-panel-kit';

export default () => {
  return (
    <View>
      <Text>aa</Text>
      <Button
        text="点我弹窗"
        onPress={() => {
          Dialog.alert({
            title: '标题',
            subTitle: '副标题',
            confirmText: '确认',
            onConfirm: (data, { close }) => {
              close();
            },
          });
          Dialog.alert({
            title: '标题1',
            subTitle: '副标题1',
            confirmText: '确认1',
            onConfirm: (data, { close }) => {
              close();
            },
          });
        }}
      />
    </View>
  );
};
