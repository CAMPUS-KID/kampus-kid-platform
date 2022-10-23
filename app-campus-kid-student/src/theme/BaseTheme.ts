import { isIOS } from '@shared_utils';
import { Theme } from './types';

const BaseTheme: Theme = {
  colors: {
    primary: '#181818',
    accent: '#F00303',
    secondary: '#767676',
    tertiary: '#8A8A8A',
    grayBackground: '#F4F4F4',
    textDisable: '#C8C8C8',
    whiteBackground: '#FFFFFF',
    accentActive: '#CC0000',
    shadowGray: '#EEEEEE',
    backgroundGray: '#FAFAFA'
  },
  fontFamilies: {
    roobertRegular: 'Roobert-Regular',
    roobertBold: 'Roobert-Bold',
    roobertSemiBold: 'Roobert-SemiBold',
    inter: 'Inter'
  },
  fontSizes: {
    mini: '10px',
    extraSmall: '14px',
    small: '16px',
    medium: '18px',
    mediumLarge: '20px',
    large: '24px',
    extraLarge: '28px'
  },
  fontWeights: {
    regular: isIOS() ? '500' : '600',
    semiBold: isIOS() ? '600' : '700',
    bold: isIOS() ? '700' : '800'
  }
};

export default BaseTheme;
