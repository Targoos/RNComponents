import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {Header} from '../components/Header';
import {ItemSeparator} from '../components/ItemSeparator';
import {menuItems} from '../data';

export const HomeScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={menuItems}
      renderItem={({item}) => <FlatListMenuItem {...item} />}
      keyExtractor={item => item.icon}
      ListHeaderComponent={<Header title="RN Components" />}
      ItemSeparatorComponent={ItemSeparator}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listSeparator: {
    marginVertical: 3,
  },
});
