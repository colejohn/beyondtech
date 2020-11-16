import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloLink  } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.css'

const link = new HttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "same-origin",
});

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({GraphQLError, networkError})=>{
      if(GraphQLError){
        GraphQLError.forEach(({message, locations, path})=>{
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          );
      });
    }
    if(networkError){
      console.log(`[Network error]: ${networkError}`);
    }
  }),
  link,
  ]),
  cache: new InMemoryCache()
})
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client} >
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
