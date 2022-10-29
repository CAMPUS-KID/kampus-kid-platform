import { Data, Routes } from '@shared_constants';
import { useBuildStyles, useNavigate } from '@shared_hooks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, View, Text, Pressable, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styleSheet } from './styles';

const SearcherScreen = () => {
  const styles = useBuildStyles(styleSheet);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const searchBar = () => {}
/*
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
*/
  const [searchInput, setSearchInput] = useState('');
  const [searchOutput, setSearchOutput] = useState('');

  const doSearch = () => {
    const foundSubject = Data.subjects.filter((subject)=>subject.id.toLowerCase().includes(searchInput.toLowerCase()) || subject.name.toLowerCase().includes(searchInput.toLowerCase()) || subject.description.toLowerCase().includes(searchInput.toLowerCase()));
    let returner = "" ;
    for(let i = 0; i < foundSubject.length;i++){
      returner = returner + "* " + foundSubject[i].id +" "+ foundSubject[i].name + "\n";
    }
    setSearchOutput(returner);
  }

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{t('search:title')}</Text>
        <TextInput
          value={searchInput}
          onChangeText={(value)=>setSearchInput(value)}
          style={styles.textInput}
          placeholder={t('search:holder')}
          keyboardType="web-search" />
        <Pressable
          style={styles.button}
          onPress={doSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </Pressable>
        <Text style={styles.normal}>{searchOutput}</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
)};

export default SearcherScreen;
