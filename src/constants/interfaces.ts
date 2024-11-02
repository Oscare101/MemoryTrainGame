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
  bgDim: string;
  bgShadow: string;
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
    | 'fire'
    | 'infinity'
    | 'close'
    | 'correct'
    | 'open'
    | 'arrowLeft'
    | 'arrowRight';
}

export interface RulesInterface {
  widthPercentage: string;
  widthNumber: number;
  defaultWordsAmount: number;
}

export interface GameTypeInterface {
  type: 'easy' | 'hard' | 'stamina';
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
      type: GameTypeInterface['type'];
      typeTitle: string;
    };
    hard: {
      title: string;
      description: string;
      icon: IconName['value'];
      type: GameTypeInterface['type'];
      typeTitle: string;
    };
    stamina: {
      title: string;
      description: string;
      icon: IconName['value'];
      type: GameTypeInterface['type'];
      typeTitle: string;
    };
  };
  startWhenReady: string;
  gamePreambula: string;
  Start: string;
  WordsAmount: string;
  wordsMaxWarning: string;
  CloseGameWarning: string;
  CloseGameWarningTitle: string;
  goBack: string;
  Stop: string;
  Check: string;
  IfYouReadyToCheck: string;
  list: string;
  backToCards: string;
  timeMemorizing: string;
  sec: string;
  min: string;
  hours: string;
  IfYouEnteredWords: string;
  Finish: string;
  ConfirmWarningTitle: string;
  ConfirmWarning: string;
}
