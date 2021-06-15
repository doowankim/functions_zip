import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavigatorBar, SubMenuBar } from '../components';

const Router = () => {
  return (
    <BrowserRouter>
      <NavigatorBar />
      <SubMenuBar />
      <Switch>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
