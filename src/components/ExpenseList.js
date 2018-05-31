import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { startRemoveAllExpenses, removeAllExpenses } from '../actions/expenses';

export class ExpenseList extends React.Component { 
    onRemoveAll = () => {
        if (this.props.uid !== 'anon') {
			this.props.startRemoveAllExpenses();
		} else {
			this.props.removeAllExpenses();
		}
    };

    render(props) { 
        return (
            <div className="content-container">
                <div className="list-header">
                    <div className="mobile-visible">Expenses</div>
                    <div className="large-screen-visible">Expense</div>
                    <div className="large-screen-visible">Amount</div>
                </div>
                {!this.props.expenses.length ? (
                        <div className="list-item list-item--message">
                            <span>No expenses match query</span>
                        </div>
                    ) : (
                        this.props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense}/>)) 
                    ) }
                { !this.props.expenses.length ? null : (<button className="btn btn--remove-expenses" onClick={this.onRemoveAll}>Remove All Expenses</button>) }
            </div>
        )};
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        uid: state.auth.uid
    };
};

const mapDispatchToProps = (dispatch) => ({
	startRemoveAllExpenses: () => dispatch(startRemoveAllExpenses()),
	removeAllExpenses: () => dispatch(removeAllExpenses())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
