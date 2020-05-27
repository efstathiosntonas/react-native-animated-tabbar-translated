import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
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
    AsyncStorage.getItem('language').then((_language) => {
      if (_language) {
        changeLanguage(_language);
      }
    });
  }, [changeLanguage]);

  const changeLanguage = useCallback((_language) => {
    i18next.changeLanguage(_language).then(() => setLanguage(_language));
  }, []);

  return (
    <I18nContext.Provider value={{language, setLanguage: changeLanguage}}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  return useContext(I18nContext);
};

export default I18nProvider;
