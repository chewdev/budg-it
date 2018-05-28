import React from 'react';
import uuid from 'uuid';
import BudgForm from './BudgForm';
import { connect } from 'react-redux';
import { startAddIncome, addIncome } from '../actions/income';

export class AddIncomePage extends React.Component {
	onSubmit = (income) => {
		if (this.props.uid !== 'anon') {
			this.props.startAddIncome(income);
			this.props.history.push('/');
		} else {
			income.id = uuid();
			this.props.addIncome(income);
			this.props.history.push('/dashboard');
		}
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

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid
    };
};

const mapDispatchToProps = (dispatch) => ({
	startAddIncome: (income) => dispatch(startAddIncome(income)),
	addIncome: (income) => dispatch(addIncome(income))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIncomePage);