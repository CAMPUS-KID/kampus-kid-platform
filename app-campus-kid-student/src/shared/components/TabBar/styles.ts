import { css } from '@emotion/native';
import { Theme } from '@theme';

export const styleSheet = ({ colors }: Theme) => ({
  container: css`
    flex-direction: row;
    border-top-width: 1px;
    border-top-color: ${colors.shadowGray};
    padding: 0px 20px;
  `
});
