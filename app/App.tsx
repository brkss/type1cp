import React from 'react';
import { Home } from './src/screen';
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'
import { ApolloProvider } from '@apollo/react-hooks'
import { HttpLink } from '@apollo/client';
import { MainNavigation } from './src/navigation/mainnavigation';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  link: httpLink as any,
  cache: new InMemoryCache()
})

export default function App() {
  return (
      <ApolloProvider client={client as any}>
        <MainNavigation />
      </ApolloProvider>
    );
}
