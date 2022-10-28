import React, { FC, memo } from 'react';
import { SvgProps } from 'react-native-svg';
import { IconEnum } from '@shared_enums';
import Movie from '@icons/Movie.svg';
import Serie from '@icons/Serie.svg';
import Schedule from '@icons/Schedule.svg';
import Search from '@icons/Search.svg'

const IconMap: { [key: number]: FC<SvgProps> } = {
  [IconEnum.MOVIES]: Movie,
  [IconEnum.SERIES]: Serie,
  [IconEnum.SEARCH]: Search,
  [IconEnum.SCHEDULE]: Schedule
};

interface Props extends SvgProps {
  name: IconEnum;
}

const Icon = ({ name, ...props }: Props) => {
  const SelectedIcon = IconMap[name];
  return <SelectedIcon {...props} />;
};

export default memo(Icon);
