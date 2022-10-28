import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useBuildStyles } from '@shared_hooks';

import { styleSheet } from './styles';
import { ListingSerieElement } from 'src/shared/services/SerieService/types';
import { buildImageURL } from '@shared_utils';

interface Props {
  serie: ListingSerieElement;
  onPress?: () => void;
}

const SerieCard = ({ serie, onPress }: Props) => {
  const styles = useBuildStyles(styleSheet);

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.bodyContainer}>
        <Image style={styles.cardImage} source={{ uri: buildImageURL(serie.poster_path) }} />
        <Text style={styles.cardLabel}>{serie.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SerieCard);
