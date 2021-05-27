import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/themeContext/ThemeContext';
// import {useTheme} from '@react-navigation/native';

export const FlatListMenuItem = ({name, icon, component}) => {
  const navigation = useNavigation();

  const {
    theme: {
      colors: {primary, text},
    },
  } = useContext(ThemeContext);

  // const {color} = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(component)}>
      <View style={styles.container}>
        <View style={styles.itemWrapper}>
          <Icon name={icon} size={23} color={primary} />
          <Text style={{...styles.itemText, color: `${text}`}}>{name}</Text>
        </View>
        <Icon name="caret-forward" size={23} color={primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 3,
    borderColor: '#D9D9DB',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  itemWrapper: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 18,
  },
});
