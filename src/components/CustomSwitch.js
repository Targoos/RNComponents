import React, {useState, useContext} from 'react';
import {View, Text, Switch, Platform, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const CustomSwitch = ({isOn, name, onChange}) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const {
    theme: {
      colors: {text, primary},
    },
  } = useContext(ThemeContext);

  const handleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled, 'hola');
  };

  return (
    <View style={styles.switchWrapper}>
      <Text style={{...styles.label, color: `${text}`}}>{name}</Text>
      <Switch
        value={isEnabled}
        onValueChange={handleSwitch}
        trackColor={{false: '#D9D9DB', true: `${primary}`}}
        thumbColor={Platform.OS === 'android' ? `${primary}` : ''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchWrapper: {
    width: 250,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    marginRight: 5,
  },
});
