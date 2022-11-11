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
    margin-top: 20px;
  `,
  descriptionText: css`
    color: ${colors.primary};
    font-family: ${fontFamilies.roobertRegular};
    font-size: ${fontSizes.medium};
    text-align: center;
    margin-top: 40px;
    padding: 20px;
  `,
});
