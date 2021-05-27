import React, {useRef} from 'react';
import {StyleSheet, Animated, PanResponder, View} from 'react-native';
import {Header} from '../components/Header';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <>
      <Header title="Animation102Screen" />
      <View style={styles.container} {...panResponder.panHandlers}>
        <Animated.View style={[pan.getLayout(), styles.minionBox]} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minionBox: {
    backgroundColor: '#f3de2c',
    width: 150,
    height: 150,
    borderWidth: 3,
  },
});
