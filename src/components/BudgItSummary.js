import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectIncome from '../selectors/income';
import selectTotal from '../selectors/total';

export const BudgItSummary = (props) => {
    const expenseWord  = props.expenses.length === 1 ? 'expense ' : 'expenses ';
    const incomeWord = props.income.length === 1 ? 'income ' : 'incomes ';
    const budgitTotal = selectTotal(props.expenses, props.income);
    return (
    <div className={budgitTotal >= 0 ? "page-header" : "page-header page-header--bg-red"}>
        <div className="content-container">
            <h2 className="page-header__budgit">
                Budget: <span className={budgitTotal === 0 ? "page-header__brown" : budgitTotal > 0 ? "page-header__main-green" : "page-header__red"}>{numeral(budgitTotal).format('$0,0.00')}</span>
            </h2>
            <div className="page-header__sub-summary">
                <h3 className="page-header__expenses">
                    Viewing <span className="page-header__expense-number">{props.expenses.length}</span> {expenseWord}
                    totaling: <span className="page-header__expense-total">{numeral(selectTotal(props.expenses)).format('$0,0.00')}</span>
                </h3>
                <h3 className="page-header__incomes">
                    Viewing <span className="page-header__income-number">{props.income.length}</span> {incomeWord}
                    totaling: <span className="page-header__income-total">{numeral(selectTotal(props.income)).format('$0,0.00')}</span>
                </h3>
            </div>
            <div className="page-header__sub-summary">
                <Link to='/create/expense' className="btn btn--expense">Add Expense</Link>
                <Link to='/create/income' className="btn btn--income">Add Income</Link>
            </div>
        </div>
    </div>
)};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        income: selectIncome(state.income, state.filters)
    };
};

export default connect(mapStateToProps)(BudgItSummary);