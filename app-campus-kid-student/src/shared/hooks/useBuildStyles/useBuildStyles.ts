import { useTheme } from '@emotion/react';
import { Theme } from '@theme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useBuildStyles = <T>(styleSheet: (theme: Theme) => T): T => {
  const theme = useTheme() as Theme;
  return styleSheet(theme);
};

export default useBuildStyles;
