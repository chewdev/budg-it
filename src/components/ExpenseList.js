import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import selectIncome from '../selectors/income';
import numeral from 'numeral';

const ExpenseList = (props) => (
    <div>
        <h3>Budg-It: {
            numeral(((props.income ? props.income.reduce((acc, income) => {
                return acc + income.amount;
            },0) : 0) - (props.expenses ? props.expenses.reduce((acc, expense) => {
                return acc + expense.amount;
            },0) : 0)) / 100).format('$0,0.00')
            } </h3>
        <h1>ExpenseList</h1>
        <h3>Total Expenses: {numeral((props.expenses ? props.expenses.reduce((acc, expense) => {
                return acc + expense.amount;
            },0) : 0) / 100).format('$0,0.00')}
        </h3>
        {props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense}/>))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        income: selectIncome(state.income, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
