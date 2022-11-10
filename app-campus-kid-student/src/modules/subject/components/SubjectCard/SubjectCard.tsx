import React, { memo } from 'react';
import { Image, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';
import { useBuildStyles } from '@shared_hooks';

import { styleSheet } from './styles';
import { buildImageURL } from '@shared_utils';
import { Subject } from '@modules/subject/types';

interface Props {
  subject: ListRenderItemInfo<Subject>;
  onPress?: () => void;
}

const SerieCard = ({ subject, onPress }: Props) => {
  const styles = useBuildStyles(styleSheet);

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.bodyContainer}>
        <Image style={styles.cardImage} source={{ uri: subject.index % 3 == 0 ? 'https://thumbs.dreamstime.com/b/colorful-illustration-sport-physical-education-modern-flat-style-college-subject-icon-colorful-illustration-112452856.jpg' : 'https://thumbs.dreamstime.com/b/ic-nes-populaires-de-pictogramme-de-sports-r%C3%A9gl%C3%A9es-49430102.jpg'  }} />
        <Text style={styles.cardLabel}>{subject.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SerieCard);
