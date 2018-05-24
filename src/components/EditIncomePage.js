import React from 'react';
import { connect } from 'react-redux';
import BudgForm from './BudgForm';
import { editIncome, removeIncome } from '../actions/income';

const EditIncomePage = (props) => {
	return (
	<div>
		<BudgForm
            buttonText="Edit Income"
			income={props.income}
			onSubmit={(income) => {
				props.dispatch(editIncome(props.income.id, income));
				props.history.push('/');
			}}
		/>
		<button onClick={() => {
			props.dispatch(removeIncome({ id: props.income.id }));
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
		income: state.income.find((income) => income.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(EditIncomePage);