import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import BudgItSummary from './BudgItSummary';
import IncomeList from './IncomeList';

const BudgItDashboardPage = () => (
	<div>
		<BudgItSummary />
		<ExpenseListFilters />
		<ExpenseList />
		<IncomeList />

	</div>
);

export default BudgItDashboardPage;