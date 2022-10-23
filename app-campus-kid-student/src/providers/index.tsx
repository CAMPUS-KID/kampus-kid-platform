import React, { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import { I18nextProvider } from 'react-i18next';

import { LightTheme } from '@theme';
import i18n from '../../i18n';

interface Props {
  children: ReactElement;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ThemeProvider>
  );
};

export default Providers;
