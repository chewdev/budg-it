import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectIncome from '../selectors/income';
import numeral from 'numeral';
import selectTotal from '../selectors/total'

export const BudgItSummary = (props) => {
    const expenseWord  = props.expenses.length === 1 ? 'expense ' : 'expenses ';
    const incomeWord = props.income.length === 1 ? 'income ' : 'incomes ';
    return (
    <div>
        <h2>
            Budg-It: {numeral(selectTotal(props.expenses, props.income)).format('$0,0.00')}
        </h2>
        <h3>
            Viewing {props.expenses.length} {expenseWord}
            totalling: {numeral(selectTotal(props.expenses)).format('$0,0.00')}
        </h3>
        <h3>
            Viewing {props.income.length} {incomeWord}
            totalling: {numeral(selectTotal(props.income)).format('$0,0.00')}
        </h3>
    </div>
)};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        income: selectIncome(state.income, state.filters)
    };
};

export default connect(mapStateToProps)(BudgItSummary);