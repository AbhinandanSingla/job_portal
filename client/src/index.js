import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {UserProvider} from "./hooks/userContext";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://127.0.0.1:8080/graphsql',
    cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <UserProvider>
            <App/>
        </UserProvider>
    </ApolloProvider>
);
