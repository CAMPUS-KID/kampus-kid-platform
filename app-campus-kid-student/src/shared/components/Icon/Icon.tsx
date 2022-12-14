import React, { FC, memo } from 'react';
import { SvgProps } from 'react-native-svg';
import { IconEnum } from '@shared_enums';
import Movie from '@icons/Movie.svg';
import Serie from '@icons/Serie.svg';
import Book from '@icons/Book.svg';
import Account from '@icons/Account.svg';

const IconMap: { [key: number]: FC<SvgProps> } = {
  [IconEnum.MOVIES]: Movie,
  [IconEnum.SERIES]: Serie,
  [IconEnum.BOOK]: Book,
  [IconEnum.ACCOUNT]: Account
};

interface Props extends SvgProps {
  name: IconEnum;
}

const Icon = ({ name, ...props }: Props) => {
  const SelectedIcon = IconMap[name];
  return <SelectedIcon {...props} />;
};

export default memo(Icon);
