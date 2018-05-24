import React from 'react';
import BudgForm from './BudgForm';
import { connect } from 'react-redux';
import { startAddIncome } from '../actions/income';

export class AddIncomePage extends React.Component {
	onSubmit = (income) => {
		this.props.startAddIncome(income);
		this.props.history.push('/');
	};
	 render() { 
		return (
			<div>
				<h1>Add Income</h1>
				<BudgForm 
					buttonText="Add Income"
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({startAddIncome: (income) => dispatch(startAddIncome(income))});

export default connect(undefined, mapDispatchToProps)(AddIncomePage);