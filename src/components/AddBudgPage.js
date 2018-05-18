import React from 'react';
import BudgForm from './BudgForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddBudgPage extends React.Component {
	onSubmit= (expense) => {
		// props.dispatch(addExpense(expense));
		this.props.addExpense(expense);
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<h1>Add Expense</h1>
				<BudgForm 
					title="Expense"
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({addExpense: (expense) => dispatch(addExpense(expense))});
	

export default connect(undefined, mapDispatchToProps)(AddBudgPage);