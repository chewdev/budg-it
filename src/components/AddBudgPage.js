import React from 'react';
import BudgForm from './BudgForm';
import { connect } from 'react-redux';
import { startAddExpense, addExpense } from '../actions/expenses';
import uuid from 'uuid';

export class AddBudgPage extends React.Component {
	onSubmit= (expense) => {
		//check if logged in, otherwise don't store in database
		if (this.props.uid !== 'anon') {
			this.props.startAddExpense(expense);
			this.props.history.push('/');
		} else {
			expense.id = uuid();
			this.props.addExpense(expense);
			this.props.history.push('/dashboard');
		}
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

// get auth state to find if user is signed in
const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid
    };
};

const mapDispatchToProps = (dispatch) => ({
		startAddExpense: (expense) => dispatch(startAddExpense(expense)),
		addExpense: (expense) => dispatch(addExpense(expense))
	
	});
	

export default connect(mapStateToProps, mapDispatchToProps)(AddBudgPage);