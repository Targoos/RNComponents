import React, {useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {Header} from '../components/Header';
import {useForm} from '../hooks/useForm';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {
    theme: {
      colors: {jsonBackground, jsonText, inputBackground, text},
    },
  } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.container}>
          <Header title="TextInput" />
          <View
            style={{
              ...styles.jsonWrapper,
              backgroundColor: `${jsonBackground}`,
            }}>
            <Text style={{...styles.jsonText, color: `${jsonText}`}}>
              {JSON.stringify(form, null, 4)}
            </Text>
          </View>
          <CustomSwitch
            isOn={form.isSubscribed}
            name="Subscribirme"
            onChange={value => onChange(value, 'isSubscribed')}
          />
          <TextInput
            onChangeText={value => onChange(value, 'name')}
            autoCapitalize="words"
            autoCorrect={false}
            placeholder="Ingrese su nombre"
            style={{
              ...styles.input,
              backgroundColor: `${inputBackground}`,
              borderColor: `${text}`,
            }}
          />
          <TextInput
            onChangeText={value => onChange(value, 'email')}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Ingrese su email"
            style={{
              ...styles.input,
              backgroundColor: `${inputBackground}`,
              borderColor: `${text}`,
            }}
          />
          <TextInput
            onChangeText={value => onChange(value, 'phone')}
            autoCorrect={false}
            keyboardType="phone-pad"
            placeholder="Ingrese su telefono"
            style={{
              ...styles.input,
              backgroundColor: `${inputBackground}`,
              borderColor: `${text}`,
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 5,
  },
  jsonWrapper: {
    alignSelf: 'center',
    marginVertical: 80,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#D9D9DB',
    padding: 20,
    width: 300,
    backgroundColor: 'black',
  },
  jsonText: {
    color: 'white',
    fontSize: 18,
  },
});
