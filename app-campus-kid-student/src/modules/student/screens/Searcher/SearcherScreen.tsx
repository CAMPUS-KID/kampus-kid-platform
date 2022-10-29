import { Data, Routes } from '@shared_constants';
import { useBuildStyles, useNavigate } from '@shared_hooks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, View, Text, Pressable, Alert } from 'react-native';
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

  const handleChange = (e) =>{
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0){
    Data.subjects.filter((subject) => {
      return subject.name.match(searchInput);
  });
  }
  Data.subjects.map((post) => (
    <div className="box" key={post.id}>
      <p>{post.name}</p>
      <p>{post.description}</p>
    </div>
  ));
/*
  const doSearch = () => {
    const foundSubject = Data.subjects.find((subject)=>subject.id == id || subject.name == name || subject.description == description);
    if(foundUser && foundUser.password == password){
      navigate(Routes.NAVIGATORS.TABS)
    }else{
      alert("No se encontraron registros");
    }
  }
*/

  return (
    /*
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{t('search:title')}</Text>
        <TextInput
          value={searchInput}
          onChangeText={(value)=>setSearchInput(value)}
          style={styles.textInput}
          placeholder={t('search:holder')}
          keyboardType="web-search" />
          <label>Search</label>
      </View>
    </SafeAreaView>
    */
    <Text style={styles.title}>{t('search:title')}</Text>
  );
};

export default SearcherScreen;
