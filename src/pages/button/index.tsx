import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Utils } from 'tuya-panel-kit';

const { convertX } = Utils.RatioUtils;

type ListItem = {
  title: string;
  content: React.ReactNode;
};

export default () => {
  const list: ListItem[] = [
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
      content: <Button icon="selected" iconSize={24} text="文字" />,
    },
  ];
  return (
    <View style={styles.list}>
      {list.map(item => (
        <View style={styles.list_item} key={item.title}>
          <View style={styles.list_item_title}>{item.title}</View>
          <View style={styles.list_item_content}>{item.content}</View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: convertX(24),
  },
  list_item: {},
  list_item_title: {},
  list_item_content: {},
});
