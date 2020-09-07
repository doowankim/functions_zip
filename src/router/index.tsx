import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavigatorBar } from '../components';

const Router = () => {
	return (
		<BrowserRouter>
			<NavigatorBar />
			<Switch>
				<Route></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
