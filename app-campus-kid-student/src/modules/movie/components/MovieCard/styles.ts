import { css } from '@emotion/native';
import { Theme } from '@theme';

export const styleSheet = ({ colors, fontFamilies }: Theme) => ({
  cardContainer: css`
    width: 152px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${colors.tertiary};
  `,
  bodyContainer: css`
    flex-direction: column;
  `,
  cardImage: css`
    width: 150px;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  ` as any,
  cardLabel: css`
    color: ${colors.textDisable};
    padding: 10px;
    font-family: ${fontFamilies.roobertBold};
  `
});
