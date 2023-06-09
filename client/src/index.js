import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {UserProvider} from "./hooks/userContext";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {ResumeProvider} from "./hooks/ResumeData";
import {baseURl} from "./config";

const client = new ApolloClient({
    uri: baseURl + '/graphsql',
    cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <UserProvider>
            <ResumeProvider>
                <App/>
            </ResumeProvider>
        </UserProvider>
    </ApolloProvider>
);
