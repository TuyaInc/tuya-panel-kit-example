import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TYText, Utils } from 'tuya-panel-kit';

const { convertX } = Utils.RatioUtils;

type ListItem = {
  title: string;
  content: React.ReactNode;
};

export const ListView = ({ list }: { list: ListItem[] }) => {
  return (
    <View style={styles.list}>
      {list.map(item => (
        <View style={styles.list_item} key={item.title}>
          <TYText style={styles.list_item_title}>{`· ${item.title}`}</TYText>
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
  list_item: {
    marginBottom: convertX(24),
  },
  list_item_title: {
    color: 'rgba(0, 0, 0, 0.45)',
    fontSize: convertX(14),
  },
  list_item_content: {
    marginTop: convertX(16),
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
