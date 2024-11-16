import { wordListDe } from "./wordlist-de";
import { wordListEn } from "./wordlist-en";

export const enabledWordLists: { [ket: string]: string[] } = {
  en: wordListEn,
  de: wordListDe,
};

export type PassphraseLanguageOptions = {
  name: string;
  value: string;
};

export async function getWordList(language: string) {
  if (enabledWordLists[language]) {
    return enabledWordLists[language];
  }

  return wordListEn;
}
