import { css } from '@emotion/native';
import { Theme } from '@theme';

export const styleSheet = ({ colors }: Theme) => ({
  columnWrapper: css`
    justify-content: space-evenly;
    margin-vertical: 10px;
  `,
  listFooter: css`
    position: relative;
    padding-vertical: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-color: ${colors.tertiary};
  `
});
