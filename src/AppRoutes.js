import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './main/MainPage';
import CountryDetails from './country/CountryDetails';

const AppRoutes = () => (
  <Switch>
    <Route path="/" component={MainPage} exact />
    <Route path="/country" component={CountryDetails} />
  </Switch>
);

export default AppRoutes;
