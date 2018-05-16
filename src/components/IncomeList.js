import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';
import selectIncome from '../selectors/income';
import numeral from 'numeral';

const IncomeList = (props) => (
    <div>
        <h1>Income List</h1>
        <h3>Total: {numeral((props.income ? props.income.reduce((acc, income) => {
            return acc + income.amount;
        },0) : 0) / 100).format('$0,0.00')}</h3>
        {props.income.map((income) => (<IncomeListItem key={income.id} {...income}/>))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        income: selectIncome(state.income, state.filters)
    };
};

export default connect(mapStateToProps)(IncomeList);