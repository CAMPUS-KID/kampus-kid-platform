import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

import { useBuildStyles, useTesting } from '@shared_hooks';
import { Routes, Components } from '@shared_constants';
import { styleSheet } from './styles';
import { TabMenuItem } from '../TabMenuItem';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { IconEnum } from '@shared_enums';

const TabBar = ({ state: { index } }: BottomTabBarProps) => {
  const styles = useBuildStyles(styleSheet);
  const { t } = useTranslation();
  const { getTestingProps } = useTesting(Components.TAB_BAR);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <TabMenuItem
        {...getTestingProps(`tab-item-movies`)}
        route={Routes.MOVIES.MOVIE_LIST}
        icon={IconEnum.BOOK}
        tabName={t('tabs:subjects')}
        isActive={index === 0}
      />
      <TabMenuItem
        {...getTestingProps(`tab-item-series`)}
        route={Routes.SERIES.SERIE_LIST}
        icon={IconEnum.ACCOUNT}
        tabName={t('tabs:account')}
        isActive={index === 1}
      />
    </SafeAreaView>
  );
};
export default TabBar;
