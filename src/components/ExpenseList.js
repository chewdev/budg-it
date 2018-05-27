import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="mobile-visible">Expenses</div>
            <div className="large-screen-visible">Expense</div>
            <div className="large-screen-visible">Amount</div>
        </div>
        {!props.expenses.length ? (
                <div className="list-item list-item--message">
                    <span>No expenses match query</span>
                </div>
            ) : (
                props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense}/>)) 
            ) }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
