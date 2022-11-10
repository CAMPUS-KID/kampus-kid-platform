import { css } from '@emotion/native';
import { Theme } from '@theme';

export const styleSheet = ({ }: Theme) => ({
    columnWrapper: css`
        justify-content: space-evenly;
        margin-vertical: 10px;
    `,
});
