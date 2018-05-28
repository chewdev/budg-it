import React from 'react';
import { connect } from 'react-redux';
import BudgForm from './BudgForm';
import { startEditExpense, startRemoveExpense, removeExpense, editExpense } from '../actions/expenses';

export class EditBudgPage extends React.Component {
	onSubmit = (expense) => {
		if (this.props.uid !== 'anon') {
			this.props.startEditExpense(this.props.expense.id, expense);
			this.props.history.push('/');
		} else {
			this.props.editExpense(this.props.expense.id, expense);
			this.props.history.push('/dashboard');
		}
	};
	onRemove = () => {
		if (this.props.uid !== 'anon') {
			this.props.startRemoveExpense({ id: this.props.expense.id });
			this.props.history.push('/');
		} else {
			this.props.removeExpense({ id: this.props.expense.id });
			this.props.history.push('/dashboard');
		}
	}
	render() {
		return (
			<div>
				<div className="page-header page-header--bg-red">
					<div className="content-container">
						<h2 className="page-header__title red">Edit Expense</h2>
					</div>
				</div>
				<div className="content-container">
					<BudgForm
						buttonText={"Save Expense"}
						expense={this.props.expense}
						onSubmit={this.onSubmit}
					/>
					<button
						className="btn btn--expense btn--remove" 
						onClick={this.onRemove}
					>
						Remove Expense
					</button>
				</div>
			</div>
			);
	}
};

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id),
		uid: state.auth.uid
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
	startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
	editExpense: (id, expense) => dispatch(editExpense(id, expense)),
	removeExpense: (id) => dispatch(removeExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBudgPage);