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
  value:
    | 'play'
    | 'chevronLeft'
    | 'chevronRight'
    | 'settings'
    | 'statistics'
    | 'easy'
    | 'hard'
    | 'fire';
}

export interface RulesInterface {
  widthPercentage: string;
  widthNumber: number;
}

export interface TextInterface {
  quote: string;
  quoteAuthor: string;
  Play: string;
  NewGame: string;
  options: {
    easy: {
      title: string;
      description: string;
      icon: IconName['value'];
      type: 'easy' | 'hard' | 'stamina';
    };
    hard: {
      title: string;
      description: string;
      icon: IconName['value'];
      type: 'easy' | 'hard' | 'stamina';
    };
    stamina: {
      title: string;
      description: string;
      icon: IconName['value'];
      type: 'easy' | 'hard' | 'stamina';
    };
  };
}
