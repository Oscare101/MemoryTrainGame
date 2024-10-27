import {Language, TextInterface} from './interfaces';

export const text: Record<Language['value'], TextInterface> = {
  UA: {
    quote:
      '“Інтелектуальний ріст повинен починатися з народження і припинятися лише після смерті.”',
    quoteAuthor: 'Альберт Ейнштейн',
    Play: 'Грати',
    NewGame: 'Нова гра',
    options: {
      easy: {
        title: 'Легко',
        description:
          '• Обмежена кількість слів\n• Можна буде повертатись до попередніх карток\n• Відкритий список всіх слів',
        icon: 'easy',
        type: 'easy',
      },
      hard: {
        title: 'Складно',
        description:
          '• Обмежена кількість слів\n• До попередніх карток не можна повертатись\n• Список слів недоступний',
        icon: 'hard',
        type: 'hard',
      },
      stamina: {
        title: 'Витривалість',
        description:
          '• Небмежена кількість слів\n• До попередніх карток не можна повертатис\n• Список слів недоступний',
        icon: 'fire',
        type: 'stamina',
      },
    },
  },
};
