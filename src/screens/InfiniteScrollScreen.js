import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Header} from '../components/Header';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const loadMore = () => {
    let moreNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
      moreNumbers[i] = numbers.length + i;
    }

    setNumbers([...numbers, ...moreNumbers]);
  };

  const renderItem = item => {
    return (
      <Image
        source={{uri: `https://picsum.photos/id/${item}/500/400`}}
        style={{width: '100%', height: 400}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => index + index}
        renderItem={({item}) => renderItem(item)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={<Header title="Infinite Scroll" />}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={20} color="#5856d6" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
