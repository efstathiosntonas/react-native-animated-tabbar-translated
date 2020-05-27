import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import i18next from '../../index';
import {useTranslation} from 'react-i18next';

const Map = () => {
  const {t} = useTranslation();
  const [language, setLanguage] = useState('');

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
        onPress={async () => {
          await i18next.changeLanguage(language === 'en' ? 'el' : 'en');
          setLanguage(language === 'en' ? 'el' : 'en');
        }}>
        <Text style={{alignSelf: 'center'}}>{t('DEMO.CHANGE_LANGUAGE')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Map;
