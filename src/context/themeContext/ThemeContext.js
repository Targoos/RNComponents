import React, {useReducer, createContext} from 'react';
import {themeReducer} from './themeReducer';
import {darkTheme, lightTheme} from './themes';
import {types} from './types';

export const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {
  const [theme, dispatch] = useReducer(themeReducer, darkTheme);

  //Estos son actions
  const setDarkTheme = () => {
    dispatch({type: types.setDarkTheme});
    console.log('set DarkTheme');
  };

  const setLightTheme = () => {
    dispatch({type: types.setLightTheme});
    console.log('set LightTheme');
  };

  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
