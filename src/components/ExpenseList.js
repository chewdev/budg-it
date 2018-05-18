import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expenses</h1>
        {!props.expenses.length ? (
                <p>No expenses match your query. Add new expenses or change your query to view existing expenses</p>
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
