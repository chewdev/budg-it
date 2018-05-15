import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        {console.log(props)}
        <h1>ExpenseList</h1>
        <h3>Total: {props.expenses ? props.expenses.reduce((acc, expense) => {
            return acc + expense.amount;
        },0) : 0}</h3>
        {props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense}/>))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
