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
				<div className="page-header page-header--bg-red">
					<div className="content-container">
						<h2 className="page-header__title page-header__red">Add Expense</h2>
					</div>
				</div>
				<div className="content-container">
					<BudgForm 
						buttonText="Add Expense"
						onSubmit={this.onSubmit}
					/>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({startAddExpense: (expense) => dispatch(startAddExpense(expense))});
	

export default connect(undefined, mapDispatchToProps)(AddBudgPage);