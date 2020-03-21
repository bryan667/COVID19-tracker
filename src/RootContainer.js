import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';

import client from './config/client';
import AppRoutes from './AppRoutes';

const RootContainer = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ApolloProvider>
);

export default RootContainer;
