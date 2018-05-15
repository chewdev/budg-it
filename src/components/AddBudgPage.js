import React from 'react';
import BudgForm from './BudgForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddBudgPage = (props) => (
	<div>
		{console.log(props)}
		<h1>Add Budg</h1>
		<BudgForm 
			onSubmit={(expense) => {
				props.dispatch(addExpense(expense));
				props.history.push('/');
			}}
		/>
	</div>
);

export default connect()(AddBudgPage);