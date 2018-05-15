import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import AddBudgPage from '../components/AddBudgPage';
import AddIncomePage from '../components/AddIncomePage';
import EditBudgPage from '../components/EditBudgPage';
import EditIncomePage from '../components/EditIncomePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import BudgItDashboardPage from '../components/BudgItDashboardPage';

const AppRouter = () => (
    <BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={BudgItDashboardPage} exact={true} />
				<Route path="/create/expense" component={AddBudgPage} />
				<Route path="/create/income" component={AddIncomePage} />
				<Route path="/edit/expense/:id" component={EditBudgPage} />
				<Route path="/edit/income/:id" component={EditIncomePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>	
	</BrowserRouter>
);

export default AppRouter;