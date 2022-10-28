import { Data, Routes } from '@shared_constants';
import { useBuildStyles, useNavigate } from '@shared_hooks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, View, Text, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styleSheet } from './styles';

const LoginScreen = () => {
  const styles = useBuildStyles(styleSheet);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    const foundUser = Data.users.find((user)=>user.email.toLowerCase() == email.toLowerCase());
    if(foundUser && foundUser.password == password){
      navigate(Routes.NAVIGATORS.TABS)
    }else{
      alert("Datos incorrectos");
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{t('login:welcomeLabel')}</Text>
        <TextInput
          value={email}
          onChangeText={(value)=>setEmail(value)}
          style={styles.textInput}
          placeholder={t('login:email')}
          keyboardType="email-address" />
        <TextInput
          value={password}
          onChangeText={(value)=>setPassword(value)}
          secureTextEntry
          style={styles.textInput}
          placeholder={t('login:password')} />
        <Pressable
          style={styles.button}
          onPress={doLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
