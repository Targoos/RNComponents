import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      timing: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      timing: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMoving = (
    initPosition = -100,
    duration = 300,
    endPosition = 0,
  ) => {
    console.log(endPosition);
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: endPosition,
      timing: duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMoving,
  };
};
