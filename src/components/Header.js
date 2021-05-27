import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const Header = ({title}) => {
  const {top} = useSafeAreaInsets();

  const {
    theme: {
      colors: {text},
    },
  } = useContext(ThemeContext);

  return (
    <View>
      <Text style={{...styles.title, color: `${text}`, marginTop: top + 20}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
});
