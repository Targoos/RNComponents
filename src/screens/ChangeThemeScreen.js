import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from '../components/Header';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const {
    theme: {
      currentTheme,
      colors: {secondary},
    },
    setDarkTheme,
    setLightTheme,
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Header title="Themes" />
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={setLightTheme}
          style={{...styles.button, backgroundColor: `${secondary}`}}>
          <Text style={styles.buttonText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={setDarkTheme}
          style={{...styles.button, backgroundColor: 'black'}}>
          <Text style={styles.buttonText}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 150,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#D9D9DB',
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
  },
});
