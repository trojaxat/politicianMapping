import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

export const languageStrings = (stringObject: any, language: string) => {
  return new LocalizedStrings({ [language]: stringObject });
};
