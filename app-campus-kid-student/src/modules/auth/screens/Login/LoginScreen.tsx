import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, View, Text, Pressable, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSetRecoilState } from 'recoil';
import { useTheme } from '@emotion/react';

import { AuthorizeMutation, LoginMutation } from '@modules/auth/mutations';
import { AuthorizeOutput, CurrentUser, LoginOutput, LoginVariables } from '@modules/auth/types';
import { Routes } from '@shared_constants';
import { useBuildStyles, useNavigate } from '@shared_hooks';
import { buildVariables } from '@shared_utils';
import { NavigateActionEnum, RoleEnum, StorageKeyEnum } from '@shared_enums';
import { StorageAssistant } from '@shared_assistants';
import { CurrentUserAtom } from '@state';
import { Theme } from '@theme';

import { styleSheet } from './styles';

const LoginScreen = () => {
  const styles = useBuildStyles(styleSheet);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const setCurrentUser = useSetRecoilState(CurrentUserAtom);

  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme() as Theme;

  const [doLogin] = useMutation<LoginOutput, LoginVariables>(LoginMutation);
  const [authorize] = useMutation<AuthorizeOutput>(AuthorizeMutation);

  useEffect(() => {
    loading && StorageAssistant.get<CurrentUser>(StorageKeyEnum.AUTHENTICATION).then(async (storedUser)=>{
      if(storedUser){ 
        try{
          const { data: { authorize: currentUser }} = await authorize(buildVariables(null, storedUser.accessToken));
          await StorageAssistant.set(StorageKeyEnum.AUTHENTICATION, currentUser);
          setCurrentUser(currentUser);
          navigate(Routes.MOVIES.MOVIE_LIST, undefined, NavigateActionEnum.REPLACE);
        }catch(e){
          await StorageAssistant.remove(StorageKeyEnum.AUTHENTICATION);
        }
      }
      setLoading(false);
    })
  }, [])

  const onLoginPressed = async () => {
    setLoading(true);
    try {
      const { data: { login: currentUser } } = await doLogin(buildVariables({ email, password }));
      if (currentUser.role !== RoleEnum.STUDENT) {
        Alert.alert('You are not authorized to use this app, only students can login');
      } else {
        await StorageAssistant.set(StorageKeyEnum.AUTHENTICATION, currentUser);
        setCurrentUser(currentUser);
        navigate(Routes.MOVIES.MOVIE_LIST, undefined, NavigateActionEnum.REPLACE);
      }
    } catch (e) {
      Alert.alert('Incorrect email or password');
    }
    setLoading(false);
  }
  if (loading) {
    return <SafeAreaView><ActivityIndicator size="large" /></SafeAreaView>
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{t('login:welcomeLabel')}</Text>
        <TextInput
          value={email}
          placeholderTextColor={theme.colors.primary}
          onChangeText={(value) => setEmail(value)}
          style={[styles.textInput]}
          placeholder={t('login:email')}
          keyboardType="email-address" />
        <TextInput
          value={password}
          placeholderTextColor={theme.colors.primary}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry
          style={styles.textInput}
          placeholder={t('login:password')} />
        <Pressable
          style={styles.button}
          onPress={onLoginPressed}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
