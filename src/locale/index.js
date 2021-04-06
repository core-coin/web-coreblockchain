import LocalizedStrings from 'react-localization'

import en from './en.json'
import sk from './sk.json'

let jsonData = JSON.stringify(en)
console.log(jsonData)

export default new LocalizedStrings({
  en,
  sk,
})