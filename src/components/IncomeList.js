import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';
import selectIncome from '../selectors/income';

const IncomeList = (props) => (
    <div>
        <h1>Income</h1>
        {props.income.map((income) => (<IncomeListItem key={income.id} {...income}/>))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        income: selectIncome(state.income, state.filters)
    };
};

export default connect(mapStateToProps)(IncomeList);