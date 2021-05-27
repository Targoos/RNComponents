import {darkTheme, lightTheme} from './themes';
import {types} from './types';

export const themeReducer = (state, action) => {
  switch (action.type) {
    case types.setLightTheme:
      return {...lightTheme};

    case types.setDarkTheme:
      return {...darkTheme};

    default:
      return state;
  }
};
