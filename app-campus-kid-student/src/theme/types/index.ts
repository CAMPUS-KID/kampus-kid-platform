type ThemeColors = {
  primary: string;
  accent: string;
  secondary: string;
  tertiary: string;
  grayBackground: string;
  textDisable: string;
  whiteBackground: string;
  accentActive: string;
  shadowGray: string;
  backgroundGray: string;
};

type ThemeFonts = {
  roobertRegular: string;
  roobertBold: string;
  roobertSemiBold: string;
  inter: string;
};

type ThemeFontSizes = {
  mini: string;
  extraSmall: string;
  small: string;
  medium: string;
  mediumLarge: string;
  large: string;
  extraLarge: string;
};

type ThemeFontWeights = {
  regular: string;
  semiBold: string;
  bold: string;
};

export type Theme = {
  colors: ThemeColors;
  fontFamilies: ThemeFonts;
  fontSizes: ThemeFontSizes;
  fontWeights: ThemeFontWeights;
};
