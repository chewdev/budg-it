import React from 'react';
import { connect } from 'react-redux';
import BudgForm from './BudgForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditBudgPage = (props) => {
	return (
	<div>
		<BudgForm
			expense={props.expense}
			onSubmit={(expense) => {
				// Dispatch action to edit expense
				// Redirect to the dashboard
				props.dispatch(editExpense(props.expense.id, expense));
				props.history.push('/');
			}}
		/>
		<button onClick={() => {
			props.dispatch(removeExpense({ id: props.expense.id }));
			props.history.push('/');
		}}
		>
			Remove
		</button>
	</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(EditBudgPage);