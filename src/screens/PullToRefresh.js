import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {Header} from '../components/Header';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const PullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(null);

  const {
    theme: {
      colors: {text},
    },
  } = useContext(ThemeContext);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setData('Hello sir!');
      setRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          progressViewOffset={150}
          progressBackgroundColor="#5856d6"
          colors={['white', 'red', 'black']}
        />
      }>
      <View style={styles.container}>
        <Header title="Pull to refresh" />
        <Text style={styles.message}>Scroll down to refresh!!</Text>
        {data && (
          <Text style={{...styles.message, color: `${text}`}}>{data}</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  message: {
    marginTop: 250,
    fontSize: 25,
  },
});
