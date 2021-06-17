import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavigatorBar, SubMenuBar } from '../components';
import { SignUp } from '../container';

const Router = () => {
  return (
    <BrowserRouter>
      <NavigatorBar />
      <div style={{ display: 'flex' }}>
        <SubMenuBar />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
