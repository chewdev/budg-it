import React from 'react';
import BudgForm from './BudgForm';
import { connect } from 'react-redux';
import { addIncome } from '../actions/income';

const AddIncomePage = (props) => (
	<div>
		<h1>Add Income</h1>
        <BudgForm 
            buttonText="Add Income"
			onSubmit={(income) => {
				props.dispatch(addIncome(income));
				props.history.push('/');
			}}
		/>
	</div>
);

export default connect()(AddIncomePage);