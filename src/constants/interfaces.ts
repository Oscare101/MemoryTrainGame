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
  border: string;
}

export interface GameAttempt {
  timestamp: number;
  duration: number;
  wordsAmount: number;
  words: string[];
  wordPack: WordPackId;
  language: Language;
  correctWordsAmount: number;
  inputs: string[];
}

export type ThemeName = 'Olive' | 'Dark blue';

export type Language = 'uk'; //| 'en';

export type WordPackId = 'common-uk-100';

export interface UserData {
  theme: ThemeName;
  language: Language;
  startDate: number;
  wordPack: WordPackId;
  history: GameAttempt[];
  isOnboardingPassed: boolean;
}

export interface WordPack {
  id: WordPackId;
  language: Language;
  words: string[];
}

export type IconName =
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
  | 'arrowRight'
  | 'palette'
  | 'language';

export interface RulesInterface {
  widthPercentage: string;
  widthNumber: number;
  defaultWordsAmount: number;
}

export type GameTypeInterface = 'easy' | 'hard' | 'stamina';

export interface TextInterface {
  quote: string;
  quoteAuthor: string;
  Play: string;
  NewGame: string;
  options: {
    easy: {
      title: string;
      description: string;
      icon: IconName;
      type: GameTypeInterface;
      typeTitle: string;
    };
    hard: {
      title: string;
      description: string;
      icon: IconName;
      type: GameTypeInterface;
      typeTitle: string;
    };
    stamina: {
      title: string;
      description: string;
      icon: IconName;
      type: GameTypeInterface;
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
  // word pack
  'common-uk-100': string;
  Settings: string;
  Theme: string;
  Language: string;
}
