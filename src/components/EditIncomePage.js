import React from 'react';
import { connect } from 'react-redux';
import BudgForm from './BudgForm';
import { startEditIncome, startRemoveIncome, editIncome, removeIncome } from '../actions/income';

export class EditIncomePage extends React.Component { 
	onSubmit = (income) => {
		if (this.props.uid !== 'anon') {
			this.props.startEditIncome(this.props.income.id, income);
			this.props.history.push('/');
		} else {
			this.props.editIncome(this.props.income.id, income);
			this.props.history.push('/dashboard');
		}
	};
	onRemove = () => {
		if (this.props.uid !== 'anon') {
			this.props.startRemoveIncome({ id: this.props.income.id });
			this.props.history.push('/');
		} else {
			this.props.removeIncome({ id: this.props.income.id });
			this.props.history.push('/dashboard');
		}
	}
	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h2 className="page-header__title page-header__main-green">Edit Income</h2>
					</div>
				</div>
				<div className="content-container">
					<BudgForm
						buttonText="Save Income"
						income={this.props.income}
						onSubmit={this.onSubmit}
					/>
					<button className="btn btn--income btn--remove" onClick={this.onRemove}
					>
						Remove Income
					</button>
				</div>
			</div>
			);
	}
}

const mapStateToProps = (state, props) => {
	return {
		income: state.income.find((income) => income.id === props.match.params.id),
		uid: state.auth.uid
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	startEditIncome: (id, income) => dispatch(startEditIncome(id, income)),
	startRemoveIncome: (data) => dispatch(startRemoveIncome(data)),
	editIncome: (id, income) => dispatch(editIncome(id, income)),
	removeIncome: (data) => dispatch(removeIncome(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditIncomePage);