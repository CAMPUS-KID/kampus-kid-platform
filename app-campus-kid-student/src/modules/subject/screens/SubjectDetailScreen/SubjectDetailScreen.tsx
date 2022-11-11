import { useQuery } from '@apollo/client';
import { GetSubjectsByIdQuery } from '@modules/subject/queries';
import { GetSubjectByIdOutput } from '@modules/subject/types';
import { useBuildStyles } from '@shared_hooks';
import { buildImageURL } from '@shared_utils';
import React from 'react';
import { Text, ActivityIndicator, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styleSheet } from './styles';

export interface Props {
  route: {
    params: {
      subjectId: number;
    };
  };
}

const SubjectDetailScreen = ({
  route: {
    params: { subjectId }
  }
}: Props) => {
  const styles = useBuildStyles(styleSheet);
  const { data, loading, error } = useQuery<GetSubjectByIdOutput>(GetSubjectsByIdQuery, { variables: { id: subjectId } })

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator animating size="large" />
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView>
        <Text style={styles.errorText}>{error.message}</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.headerImage}
          source={{ uri: 'https://thumbs.dreamstime.com/b/colorful-illustration-sport-physical-education-modern-flat-style-college-subject-icon-colorful-illustration-112452856.jpg' }}
        />
        <Text style={styles.titleText}>[{data.getSubjectsById.code}]-{data.getSubjectsById.name}</Text>
        <Text style={styles.descriptionText}>{data.getSubjectsById.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SubjectDetailScreen;
