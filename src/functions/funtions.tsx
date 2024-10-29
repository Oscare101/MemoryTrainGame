export function GetRandomWords(words: string[], amount: number) {
  // Якщо запитана кількість слів більше, ніж у масиві, обмежуємо значення
  amount = Math.min(amount, words.length);

  const selectedWords = [];
  const usedIndices = new Set(); // Для уникнення повторів

  while (selectedWords.length < amount) {
    const randomIndex = Math.floor(Math.random() * words.length);

    if (!usedIndices.has(randomIndex)) {
      selectedWords.push(words[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return selectedWords;
}
