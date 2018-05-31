import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { startRemoveAllExpenses, removeAllExpenses, removeExpense, startRemoveExpense, removeExpensesChosen } from '../actions/expenses';

export class ExpenseList extends React.Component { 
    onRemoveAll = () => {
        if (this.props.uid !== 'anon') {
			this.props.startRemoveAllExpenses();
		} else {
			this.props.removeAllExpenses();
		}
    };

    onRemoveAllVis = () => {
        if (this.props.uid !== 'anon') {
			this.props.expenses.forEach((expense) => startRemoveExpense({ id: expense.id }));
		} else {
            const ids = this.props.expenses.map((expense) => expense.id);
            this.props.removeExpensesChosen(ids);
			//this.props.expenses.forEach((expense) => removeExpense({ id: expense.id }));
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
                { !this.props.expenses.length ? null : (<button className="btn btn--remove-expenses" onClick={this.onRemoveAllVis}>Remove All Expenses</button>) }
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
    removeAllExpenses: () => dispatch(removeAllExpenses()),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
    removeExpense: (id) => dispatch(removeExpense(id)),
    removeExpensesChosen: (ids) => dispatch(removeExpensesChosen(ids))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
