import React from 'react';
import {StyleSheet, View, Animated, Button} from 'react-native';
import {Header} from '../components/Header';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMoving} = useAnimation();

  const animationFromTop = () => {
    fadeIn();
    startMoving(-200);
  };

  const animationToTop = () => {
    startMoving(0, 800, -200);
    fadeOut();
  };

  return (
    <>
      <Header title="Animation101Screen" />
      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.flameBox,
            opacity,
            transform: [{translateY: position}],
          }}
        />
        <View style={styles.buttonsWrapper}>
          <Button title="fadeIn" onPress={animationFromTop} />
          <Button title="fadeOut" onPress={animationToTop} />
        </View>
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
  flameBox: {
    backgroundColor: '#e24e1b',
    width: 150,
    height: 150,
    borderWidth: 3,
    marginVertical: 10,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
});
