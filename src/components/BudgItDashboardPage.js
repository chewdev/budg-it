import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const BudgItDashboardPage = () => (
	<div>
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);

export default BudgItDashboardPage;