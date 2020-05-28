import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useI18n} from '../utils/i18nContext';

const Map = () => {
  const {language, setLanguage} = useI18n();
  const {t} = useTranslation();

  const handleChangeLanguage = () => {
    setLanguage(language === 'en' ? 'el' : 'en');
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{marginVertical: 5}}>{t('DEMO.YOU_ARE_ON_MAP')}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightgrey',
          padding: 5,
          marginVertical: 10,
          width: 200,
        }}
        onPress={handleChangeLanguage}>
        <Text style={{alignSelf: 'center'}}>{t('DEMO.CHANGE_LANGUAGE')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Map;
