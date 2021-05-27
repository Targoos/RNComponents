import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {Header} from '../components/Header';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isSleepy: false,
  });

  const {
    theme: {
      colors: {jsonBackground, jsonText},
    },
  } = useContext(ThemeContext);

  const handleChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const {isActive, isHungry, isSleepy} = state;

  return (
    <View style={styles.container}>
      <Header title="Switches" />
      <View
        style={{...styles.jsonWrapper, backgroundColor: `${jsonBackground}`}}>
        <Text style={{...styles.jsonText, color: `${jsonText}`}}>
          {JSON.stringify(state, null, 3)}
        </Text>
      </View>
      <CustomSwitch
        isOn={isActive}
        onChange={value => handleChange(value, 'isActive')}
        state={state}
        name="isActive"
      />
      <CustomSwitch
        isOn={isHungry}
        onChange={value => handleChange(value, 'isHungry')}
        state={state}
        name="isHungry"
      />
      <CustomSwitch
        isOn={isSleepy}
        onChange={value => handleChange(value, 'isSleepy')}
        state={state}
        name="isSleepy"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  jsonWrapper: {
    alignSelf: 'center',
    marginVertical: 100,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#D9D9DB',
    padding: 20,
    width: 250,
  },
  jsonText: {
    color: 'white',
    fontSize: 18,
  },
});
