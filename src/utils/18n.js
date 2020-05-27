import i18next from 'i18next';
import * as RNLocalize from 'react-native-localize';

import en from '../translations/en.json';
import el from '../translations/el.json';

const fallbackLanguage = {languageTag: 'en', isRTL: false};
const defaultLanguage =
  RNLocalize.findBestAvailableLanguage(['en', 'el']) || fallbackLanguage;

export const i18nextOptions = {
  lng: defaultLanguage.languageTag,
  resources: {
    en: {translation: en},
    el: {translation: el},
  },
  fallbackLng: false,
  debug: true,
  react: {
    wait: true,
  },
};

export const translate = (key) => i18next.t(key);
