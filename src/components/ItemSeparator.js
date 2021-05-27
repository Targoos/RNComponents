import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ItemSeparator = () => <View style={styles.listSeparator} />;

const styles = StyleSheet.create({
  listSeparator: {
    marginVertical: 3,
  },
});
