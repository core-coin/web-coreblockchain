import i18n from "i18next"
import { reactI18nextModule } from "react-i18next"

import translationEN from './locale/en-US.json'
import translationSK from './locale/sk-SK.json'

const resources = {
  en: {
    translation: translationEN
  },
  sk: {
    translation: translationSK
  }
}

i18n
  .use(reactI18nextModule) 
  .init({
    resources,
    lng: "en",

    keySeparator: false
    // interpolation: {
    //   escapeValue: false 
    // }
  })

export default i18n