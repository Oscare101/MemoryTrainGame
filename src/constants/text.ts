import {Language, TextInterface} from './interfaces';

export const text: Record<Language['value'], TextInterface> = {
  UA: {
    quote:
      '“Інтелектуальний ріст повинен починатися з народження і припинятися лише після смерті.”',
    quoteAuthor: 'Альберт Ейнштейн',
    Play: 'Грати',
    NewGame: 'Нова гра',
  },
};
