import {ThemeColor, ThemeName} from './interfaces';

export const colors: Record<ThemeName['value'], ThemeColor> = {
  olive: {
    name: 'Olive',
    bg: '#768F7B',
    main: '#333333',
    comment: '#ADADAD',
    accent: '#B6B654',
    card: '#5F7463',
    success: '#333333',
    error: '#AB3944',
    warning: '#ADADAD',
    buttonActive: '#AB3944',
    buttonDisabled: '#5F7463',
    buttonTitleActive: '#ADADAD',
    buttonTitleDisabled: '#C1D2C4',
    barStyle: 'dark-content',
  },
};
