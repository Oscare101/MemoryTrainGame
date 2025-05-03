import {Language, TextInterface} from './interfaces';

export const text: Record<Language, TextInterface> = {
  uk: {
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
    CloseGameWarningTitle: 'Припинити гру',
    CloseGameWarning:
      'Ви точно хочете припинити гру?\nСпроба буде зарахована, проте прогрес не збережеться',
    goBack: 'Повернутись',
    Stop: 'Припинити',
    Check: 'Перевірити',
    IfYouReadyToCheck:
      'Якщо ви вивчили всі слова і готові перейти до перевірки',
    list: 'cписок',
    backToCards: 'до карток',
    timeMemorizing: 'час запам’ятовування',
    sec: 'сек',
    min: 'хв',
    hours: 'год',
    IfYouEnteredWords: 'Якщо ви ввели всі слова і готові завершити спробу',
    Finish: 'Завершити',
    ConfirmWarningTitle: 'Завершити спробу',
    ConfirmWarning: 'Завершити спробу, навіть з наявними пустими полями',
    'common-uk-100': '100 Поширених Українських Іменників',
    Settings: 'Налаштування',
    Theme: 'Тема',
    Language: 'Мова',
  },
  //   en: {
  //     quote:
  //       '“Intellectual growth should commence at birth and cease only at death.”',
  //     quoteAuthor: 'Albert Einstein',
  //     Play: 'Play',
  //     NewGame: 'New game',
  //     options: {
  //       easy: {
  //         title: 'Easy',
  //         description:
  //           '• Limited number of words\n• You can go back to previous cards\n• Open list of all words',
  //         icon: 'easy',
  //         type: 'easy',
  //         typeTitle: 'Easy mode',
  //       },
  //       hard: {
  //         title: 'Hard',
  //         description:
  //           '• Limited number of words\n• You can’t go back to previous cards\n• List of words is not available',
  //         icon: 'hard',
  //         type: 'hard',
  //         typeTitle: 'Hard mode',
  //       },
  //       stamina: {
  //         title: 'Stamina',
  //         description:
  //           '• Unlimited number of words\n• You can’t go back to previous cards\n• List of words is not available',
  //         icon: 'fire',
  //         type: 'stamina',
  //         typeTitle: 'Stamina mode',
  //       },
  //     },
  //     startWhenReady:
  //       "Start when you're ready\nThe time will start immediately",
  //     gamePreambula:
  //       "• There will be cards with words on the screen\n• Switch between them and remember them in the correct order in the shortest time\n• After that, go to the check and enter all the words\n• Complete the attempt and check the result",
  //     Start: 'Start',
  //     WordsAmount: 'Number of words for exercise',
  //     wordsMaxWarning: 'Maximum number of words available #',
  //     CloseGameWarningTitle: 'Stop game',
  //     CloseGameWarning:
  //       "Are you sure you want to stop the game?\nThe attempt will be counted, but the progress won't be saved",
  //     goBack: 'Go back',
  //     Stop: 'Stop',
  //     Check: 'Check',
  //     IfYouReadyToCheck:
  //       "If you've learned all the words and are ready to check",
  //     list: 'list',
  //     backToCards: 'to cards',
  //     timeMemorizing: "time for memorizing",
  //     sec: 'sec.',
  //     min: 'min.',
  //     hours: 'hours.',
  //     IfYouEnteredWords:
  //       "If you've entered all the words and are ready to finish the attempt",
  //     Finish: 'Finish',
  //     ConfirmWarningTitle: '
  // Finish attempt',
  //     ConfirmWarning:
  //       'Finish
  //   }
};
