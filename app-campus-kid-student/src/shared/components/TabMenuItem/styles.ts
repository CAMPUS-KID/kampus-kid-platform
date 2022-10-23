import { css } from '@emotion/native';
import { Theme } from '@theme';

export const styleSheet = ({ fontFamilies, fontSizes }: Theme) => ({
  item: css`
    flex: 1;
    align-items: center;
    padding: 10px 0px;
  `,
  text: css`
    font-family: ${fontFamilies.inter};
    font-size: ${fontSizes.mini};
  `
});
