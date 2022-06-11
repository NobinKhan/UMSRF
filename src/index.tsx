import React from 'react';
import ReactDOM from 'react-dom';

import './i18n';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import Cookies from 'js-cookie';

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
  headers: {
    // 'X-CSRFToken': Cookies.get('csrftoken')
  }
});

ReactDOM.render(
    <ApolloProvider client={client}>
    <Provider store={configureStore({})}>
        <App />
    </Provider>
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
