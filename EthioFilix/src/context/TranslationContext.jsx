import { createContext } from "react"

export const TranslationContext = createContext({
  translations: {},
  language: "en",
  toggleLanguage: () => {},
})
