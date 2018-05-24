import React from 'react';
import { connect } from 'react-redux';
import BudgForm from './BudgForm';
import { startEditIncome, startRemoveIncome } from '../actions/income';

export class EditIncomePage extends React.Component { 
	onSubmit = (income) => {
		this.props.startEditIncome(this.props.income.id, income);
		this.props.history.push('/');
	};
	onRemove = () => {
		this.props.startRemoveIncome({ id: this.props.income.id });
		this.props.history.push('/');
	}
	render() {
		return (
			<div>
				<BudgForm
					buttonText="Edit Income"
					income={this.props.income}
					onSubmit={this.onSubmit}
				/>
				<button onClick={this.onRemove}
				>
					Remove
				</button>
			</div>
			);
	}
}

const mapStateToProps = (state, props) => {
	return {
		income: state.income.find((income) => income.id === props.match.params.id)
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	startEditIncome: (id, income) => dispatch(startEditIncome(id, income)),
	startRemoveIncome: (data) => dispatch(startRemoveIncome(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditIncomePage);