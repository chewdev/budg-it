import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddBudgPage from '../components/AddBudgPage';
import AddIncomePage from '../components/AddIncomePage';
import EditBudgPage from '../components/EditBudgPage';
import EditIncomePage from '../components/EditIncomePage';
import NotFoundPage from '../components/NotFoundPage';
import BudgItDashboardPage from '../components/BudgItDashboardPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/dashboard" component={BudgItDashboardPage} />
				<PrivateRoute path="/create/expense" component={AddBudgPage} />
				<PrivateRoute path="/create/income" component={AddIncomePage} />
				<PrivateRoute path="/edit/expense/:id" component={EditBudgPage} />
				<PrivateRoute path="/edit/income/:id" component={EditIncomePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>	
	</Router>
);

export default AppRouter;