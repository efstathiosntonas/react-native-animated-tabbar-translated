import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import i18next from 'i18next';

const DEFAULT_LANGUAGE = 'en';

const I18nContext = createContext({
  language: undefined,
  setLanguage: undefined,
});

const I18nProvider = ({children}) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    AsyncStorage.getItem('language').then((_lang) => {
      if (_lang) {
        setLanguage(_lang);
      }
    });
  }, []);

  useEffect(() => {
    i18next.changeLanguage(language).catch((error) => console.log(error));
  }, [language]);
  return (
    <I18nContext.Provider value={{language, setLanguage}}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  return useContext(I18nContext);
};

export default I18nProvider;
