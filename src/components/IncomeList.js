import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';
import selectIncome from '../selectors/income';

const IncomeList = (props) => (
    
        <div className="content-container">
            <div className="list-header list-header--income">
                <div className="mobile-visible">Incomes</div>
                <div className="large-screen-visible">Income</div>
                <div className="large-screen-visible">Amount</div>
            </div>
            <div className="list-body">
                {!props.income.length ? (
                    <div className="list-item list-item--income list-item--message list-item--message--income">
                        <span>No incomes match query</span>
                    </div>
                    ) : (
                    props.income.map((income) => (<IncomeListItem key={income.id} {...income}/>)) 
                ) }
            </div>
        </div>
    
);

const mapStateToProps = (state) => {
    return {
        income: selectIncome(state.income, state.filters)
    };
};

export default connect(mapStateToProps)(IncomeList);


