import 'react-native-gesture-handler';
import React from 'react';
import {Navigation} from './src/navigation/Navigation';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

// const customTheme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: '',
//     // background: 'black',
//     // card: '',
//     // text: 'white',
//     // border: '',
//     // notification: '',
//   },
// };

export const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

const AppState = ({children}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
