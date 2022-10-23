import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ListingMovieElement } from 'src/shared/services/MovieService/types';
import { useBuildStyles } from '@shared_hooks';

import { styleSheet } from './styles';
import { buildImageURL } from '@shared_utils';

interface Props {
  movie: ListingMovieElement;
  onPress?: () => void;
}

const SerieCard = ({ movie, onPress }: Props) => {
  const styles = useBuildStyles(styleSheet);

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.bodyContainer}>
        <Image style={styles.cardImage} source={{ uri: buildImageURL(movie.poster_path) }} />
        <Text style={styles.cardLabel}>{movie.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SerieCard);
