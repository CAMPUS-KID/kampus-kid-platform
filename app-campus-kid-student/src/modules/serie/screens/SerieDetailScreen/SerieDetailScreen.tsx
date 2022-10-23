import { useFetchSerieDetail } from '@modules/serie/hooks/useFetchSerieDetail';
import { useBuildStyles } from '@shared_hooks';
import { buildImageURL } from '@shared_utils';
import React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styleSheet } from './styles';

export interface Props {
  route: {
    params: {
      serieId: number;
    };
  };
}

const SerieDetailScreen = ({
  route: {
    params: { serieId }
  }
}: Props) => {
  const styles = useBuildStyles(styleSheet);
  const { isFetchingSerieDetail, fetchSerieDetailError, serieDetail } =
    useFetchSerieDetail(serieId);

  if (isFetchingSerieDetail) {
    return (
      <SafeAreaView>
        <ActivityIndicator animating size="large" />
      </SafeAreaView>
    );
  }
  if (fetchSerieDetailError) {
    return (
      <SafeAreaView>
        <Text style={styles.errorText}>{fetchSerieDetailError.message}</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.headerImage}
          source={{ uri: buildImageURL(serieDetail.poster_path) }}
        />
        <Text style={styles.titleText}>{serieDetail.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SerieDetailScreen;
