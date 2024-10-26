export interface ThemeColor {
  name: string;
  bg: string[];
  main: string;
  comment: string;
  accent: string;
  card: string;
  success: string;
  error: string;
  warning: string;
  buttonActive: string[];
  buttonDisabled: string[];
  buttonTitleActive: string;
  buttonTitleDisabled: string;
  barStyle: 'dark-content' | 'light-content';
}

export interface ThemeName {
  value: 'olive';
}

export interface Language {
  value: 'UA';
}

export interface IconName {
  value: 'play';
}

export interface TextInterface {
  quote: string;
  quoteAuthor: string;
  Play: string;
}

export interface RulesInterface {
  widthPercentage: string;
  widthNumber: number;
}
