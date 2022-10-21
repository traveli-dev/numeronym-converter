import { splitSentence } from '@/utils/splitSentence'

export const convertSentence = (input: string) => {
  const arr = splitSentence(input)

  return getConvertedWords(arr).join(' ')
}

/* 単語をヌメロニム化 */
const getConvertedWords = (words: string[]) => {
  const convertedWords: string[] = []
  words.forEach((word) => {
    if (word.length < 4) {
      convertedWords.push(word)
      return
    }
    convertedWords.push(
      word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1)
    )
  })
  return convertedWords
}
