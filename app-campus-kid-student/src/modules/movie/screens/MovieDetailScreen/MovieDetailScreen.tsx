import { useFetchMovieDetail } from '@modules/movie/hooks';
import { useBuildStyles } from '@shared_hooks';
import { buildImageURL } from '@shared_utils';
import React from 'react';
import { Text, ActivityIndicator, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styleSheet } from './styles';

export interface Props {
  route: {
    params: {
      movieId: number;
    };
  };
}

const MovieDetailScreen = ({
  route: {
    params: { movieId }
  }
}: Props) => {
  const styles = useBuildStyles(styleSheet);
  
  const { isFetchingMovieDetail, fetchMovieDetailError, movieDetail } = useFetchMovieDetail(movieId);

  if (isFetchingMovieDetail) {
    return (
      <SafeAreaView>
        <ActivityIndicator animating size="large" />
      </SafeAreaView>
    );
  }
  if (fetchMovieDetailError) {
    return (
      <SafeAreaView>
        <Text style={styles.errorText}>{fetchMovieDetailError.message}</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.headerImage}
          source={{ uri: buildImageURL(movieDetail.poster_path) }}
        />
        <Text style={styles.titleText}>{movieDetail.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
