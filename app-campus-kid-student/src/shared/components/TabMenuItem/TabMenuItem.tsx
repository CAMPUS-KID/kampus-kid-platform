import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@emotion/react';

import { useBuildStyles, useTesting } from '@shared_hooks';
import { Components } from '@shared_constants';
import { Theme } from '@theme';

import { styleSheet } from './styles';
import { useNavigate } from '@shared_hooks';
import { IconEnum } from '@shared_enums';
import { Icon } from '../Icon';

export interface Props {
  route: string;
  icon: IconEnum;
  tabName: string;
  isActive: boolean;
}

const TabMenuItem = ({ route, icon, tabName, isActive }: Props) => {
  const { getTestingProps } = useTesting(Components.TAB_BAR_ITEM);
  const styles = useBuildStyles(styleSheet);
  const theme = useTheme() as Theme;
  const navigate = useNavigate();

  const color = isActive ? theme.colors.accent : theme.colors.tertiary;

  return (
    <TouchableOpacity
      {...getTestingProps(`tab-item`)}
      style={styles.item}
      onPress={() => navigate(route)}
    >
      <Icon name={icon} color={color} fill={color} width={30} height={30} />
      <Text style={[styles.text, { color }]}>{tabName}</Text>
    </TouchableOpacity>
  );
};
export default TabMenuItem;
