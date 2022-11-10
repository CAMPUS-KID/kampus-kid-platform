import React, { memo, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useBuildStyles, useNavigate } from '@shared_hooks';

import { InfiniteList } from '@shared_components';
import { SubjectCard } from '@modules/subject/components';
import { Routes } from '@shared_constants';
import { NavigateActionEnum } from '@shared_enums';
import { useQuery } from '@apollo/client';
import { GetAllSubjectsQuery } from '@modules/subject/queries';
import { ActivityIndicator, FlatList } from 'react-native';
import { GetSubjectsOutput, Subject } from '@modules/subject/types';
import { styleSheet } from './styles';

const SubjectListScreen = () => {
  const styles = useBuildStyles(styleSheet);
  const navigate = useNavigate();

  const { data, loading } = useQuery<GetSubjectsOutput>(GetAllSubjectsQuery);

  if (loading) {
    return <SafeAreaView><ActivityIndicator size="large" /></SafeAreaView>
  }

  return (
    <SafeAreaView>
      <FlatList
        columnWrapperStyle={styles.columnWrapper}
        data={data.getSubjects}
        keyExtractor={item => `${item.id}`}
        numColumns={2}
        keyboardShouldPersistTaps="always"
        renderItem={subject => (
          <SubjectCard
            subject={subject}
            onPress={() =>
              navigate(Routes.MOVIES.MOVIE_DETAIL, { subjectId: subject.item.id }, NavigateActionEnum.PUSH)
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default memo(SubjectListScreen);
