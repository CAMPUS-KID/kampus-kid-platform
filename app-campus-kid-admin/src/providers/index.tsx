import { ReactElement } from "react";
import { RecoilRoot } from "recoil";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

interface Props {
  children: ReactElement;
}

export const Providers = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </RecoilRoot>
  );
};
