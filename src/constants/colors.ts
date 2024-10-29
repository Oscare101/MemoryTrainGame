import {ThemeColor, ThemeName} from './interfaces';

export const colors: Record<ThemeName['value'], ThemeColor> = {
  olive: {
    name: 'Olive',
    bg: ['#768F7B', '#78987E'],
    main: '#333333',
    comment: '#ADADAD',
    accent: '#B6B654',
    card: '#5F7463',
    success: '#333333',
    error: '#AB3944',
    warning: '#ADADAD',
    buttonActive: ['#333333', '#3C3C3C'],
    buttonDisabled: ['#5F7463', '#5F7463'],
    buttonTitleActive: '#C1D2C4',
    buttonTitleDisabled: '#ADADAD',
    barStyle: 'dark-content',
    bgDim: '#47564A',
    bgShadow: '#00000066',
  },
};
