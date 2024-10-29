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
        typeTitle: 'Легкий режим',
      },
      hard: {
        title: 'Складно',
        description:
          '• Обмежена кількість слів\n• До попередніх карток не можна повертатись\n• Список слів недоступний',
        icon: 'hard',
        type: 'hard',
        typeTitle: 'Складний режим',
      },
      stamina: {
        title: 'Витривалість',
        description:
          '• Небмежена кількість слів\n• До попередніх карток не можна повертатись\n• Список слів недоступний',
        icon: 'fire',
        type: 'stamina',
        typeTitle: 'Режим на витривалість',
      },
    },
    startWhenReady: 'Починайте коли будете готові\nЧас почнеться одразу',
    gamePreambula:
      '• На екрані будуть карточки зі словами\n• Перемикайтесь між ними та запам’ятайте їх у правильному порядку за найкоротший час\n• Після цього перейдіть до перевірки і введіть всі слова\n• Завершіть спробу та ознайомтесь із результатом',
    Start: 'Почати',
    WordsAmount: 'Кількість слів для вправи',
    wordsMaxWarning: 'Максимальна кількість слів доступна #',
  },
};
