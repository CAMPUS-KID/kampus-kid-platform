import { css } from '@emotion/native';
import { Theme } from '@theme';

export const styleSheet = ({ colors, fontFamilies, fontSizes }: Theme) => ({
  errorText: css`
    color: ${colors.accent};
  `,
  headerImage: css`
    width: 100%;
    height: 300px;
  ` as any,
  titleText: css`
    color: ${colors.primary};
    font-family: ${fontFamilies.roobertBold};
    font-size: ${fontSizes.extraLarge};
    text-align: center;
  `
});
