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
				<div className="page-header">
					<div className="content-container">
						<h2 className="page-header__title page-header__main-green">Add Income</h2>
					</div>
				</div>
				<div className="content-container">
					<BudgForm 
						buttonText="Add Income"
						onSubmit={this.onSubmit}
					/>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({startAddIncome: (income) => dispatch(startAddIncome(income))});

export default connect(undefined, mapDispatchToProps)(AddIncomePage);