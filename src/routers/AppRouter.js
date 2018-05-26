import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddBudgPage from '../components/AddBudgPage';
import AddIncomePage from '../components/AddIncomePage';
import EditBudgPage from '../components/EditBudgPage';
import EditIncomePage from '../components/EditIncomePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import BudgItDashboardPage from '../components/BudgItDashboardPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/dashboard" component={BudgItDashboardPage} />
				<PrivateRoute path="/create/expense" component={AddBudgPage} />
				<PrivateRoute path="/create/income" component={AddIncomePage} />
				<PrivateRoute path="/edit/expense/:id" component={EditBudgPage} />
				<PrivateRoute path="/edit/income/:id" component={EditIncomePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>	
	</Router>
);

export default AppRouter;