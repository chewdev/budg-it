import React from 'react';
import BudgForm from './BudgForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddBudgPage = (props) => (
	<div>
		<h1>Add Expense</h1>
		<BudgForm 
			title="Expense"
			onSubmit={(expense) => {
				props.dispatch(addExpense(expense));
				props.history.push('/');
			}}
		/>
	</div>
);

export default connect()(AddBudgPage);