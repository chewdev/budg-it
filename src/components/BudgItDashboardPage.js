import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import IncomeList from './IncomeList';

const BudgItDashboardPage = () => (
	<div>
		<ExpenseListFilters />
		<ExpenseList />
		<IncomeList />

	</div>
);

export default BudgItDashboardPage;