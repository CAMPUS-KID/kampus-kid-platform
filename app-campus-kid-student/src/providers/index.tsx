import React, { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import { I18nextProvider } from 'react-i18next';
import Config from 'react-native-config';
import i18n from '../../i18n';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';

import { LightTheme } from '@theme';

const client = new ApolloClient({
  uri: Config.API_URL,
  cache: new InMemoryCache()
});

interface Props {
  children: ReactElement;
}

const Providers = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <ThemeProvider theme={LightTheme}>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
};

export default Providers;
