import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://127.0.0.1:5000/graphql',
//   cache: new InMemoryCache(),
// });

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <ApolloProvider client={client}>
    <App />
  // </ApolloProvider>,
);