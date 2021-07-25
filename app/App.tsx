import React from 'react';
import { Home } from './src/screen';
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'
import { ApolloProvider } from '@apollo/react-hooks'


const restLink = new RestLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: restLink as any,
  cache: new InMemoryCache()
})

export default function App() {
  return (
      <ApolloProvider client={client as any}>
        <Home />
      </ApolloProvider>
    );
}
