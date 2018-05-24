import React from 'react';
import BudgForm from './BudgForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class AddBudgPage extends React.Component {
	onSubmit= (expense) => {
		// props.dispatch(addExpense(expense));
		this.props.startAddExpense(expense);
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<h1>Add Expense</h1>
				<BudgForm 
					buttonText="Add Expense"
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({startAddExpense: (expense) => dispatch(startAddExpense(expense))});
	

export default connect(undefined, mapDispatchToProps)(AddBudgPage);