import { css } from '@emotion/native';
import { Theme } from '@theme';

export const styleSheet = ({ colors, fontFamilies, fontSizes }: Theme) => ({
  textInput: css`
    width: 300px;
    height: 40px;
    border-width: 1px;
    padding: 10px;
    margin: 10px;
    font-family: ${fontFamilies.inter};
    color: ${colors.primary};
    border-radius: 5px;
    border-color: ${colors.secondary};
  `,
  title: css`
    font-family: ${fontFamilies.roobertBold};
    font-size: ${fontSizes.extraLarge};
    color: ${colors.secondary};
    margin: 20px;
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
  container: css`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  `
});
