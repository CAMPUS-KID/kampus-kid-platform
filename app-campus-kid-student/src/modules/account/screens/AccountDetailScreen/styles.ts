import { css } from '@emotion/native';
import { Theme } from '@theme';

export const styleSheet = ({ colors, fontFamilies, fontSizes }: Theme) => ({
  container: css`
    align-items: center;
    justify-content: space-around;
    height: 100%;
  `,
  titleText: css`
    color: ${colors.primary};
    font-family: ${fontFamilies.roobertBold};
    font-size: ${fontSizes.extraLarge};
    text-align: center;
  `,
  button: css`
    background-color: ${colors.accent};
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    align-items: center;
  `,
  buttonText: css`
    color: ${colors.whiteBackground};
  `,
});
