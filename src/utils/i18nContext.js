import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
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

  const changeLanguage = useCallback(async (_language) => {
    await i18next.changeLanguage(_language);
    await setLanguage(_language);
    await AsyncStorage.setItem('language', _language);
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('language').then((_language) => {
      if (_language) {
        changeLanguage(_language);
      }
    });
  }, [changeLanguage]);

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
