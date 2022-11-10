import { useFetchSerieDetail } from '@modules/account/hooks/useFetchSerieDetail';
import { StorageAssistant } from '@shared_assistants';
import { Routes } from '@shared_constants';
import { NavigateActionEnum, StorageKeyEnum } from '@shared_enums';
import { useBuildStyles, useNavigate } from '@shared_hooks';
import { buildImageURL } from '@shared_utils';
import { CurrentUserAtom } from '@state';
import React from 'react';
import { useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styleSheet } from './styles';

const AccountDetailScreen = () => {
  const styles = useBuildStyles(styleSheet);
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useRecoilState(CurrentUserAtom);

  const [loading, setLoading] = useState(false);

  const onLogoutPressed = async ()=>{
    setLoading(true);
    await StorageAssistant.remove(StorageKeyEnum.AUTHENTICATION);
    setCurrentUser(null);
    navigate(Routes.STUDENT.LOGIN, null, NavigateActionEnum.REPLACE);
    setLoading(false);
  }

  if (loading) {
    return <SafeAreaView><ActivityIndicator size="large" /></SafeAreaView>
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titleText}>{currentUser.email}</Text>
        <Pressable
          style={styles.button}
          onPress={onLogoutPressed}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AccountDetailScreen;
