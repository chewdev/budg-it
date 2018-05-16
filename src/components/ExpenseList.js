import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import selectIncome from '../selectors/income';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/total'

const ExpenseList = (props) => (
    <div>
        <h3>
            Budg-It: {numeral(selectExpensesTotal(props.expenses, props.income)).format('$0,0.00')}
        </h3>
        <h1>ExpenseList</h1>
        <h3>
            Total Expenses: {numeral(selectExpensesTotal(props.expenses)).format('$0,0.00')}
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
