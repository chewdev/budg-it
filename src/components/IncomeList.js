import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';
import selectIncome from '../selectors/income';
import { startRemoveAllIncomes, removeAllIncomes } from '../actions/income';

export class IncomeList extends React.Component { 
    onRemoveAllIncomes = () => {
        if (this.props.uid !== 'anon') {
			this.props.startRemoveAllIncomes();
		} else {
			this.props.removeAllIncomes();
		}
    };

    render(props) {
        return (
            <div className="content-container container-end">
                <div className="list-header list-header--income">
                    <div className="mobile-visible">Incomes</div>
                    <div className="large-screen-visible">Income</div>
                    <div className="large-screen-visible">Amount</div>
                </div>
                <div className="list-body">
                    {!this.props.income.length ? (
                        <div className="list-item list-item--income list-item--message list-item--message--income">
                            <span>No incomes match query</span>
                        </div>
                        ) : (
                        this.props.income.map((income) => (<IncomeListItem key={income.id} {...income}/>)) 
                    ) }
                     { !this.props.income.length ? null : (<button className="btn btn--remove-incomes" onClick={this.onRemoveAllIncomes}>Remove All Incomes</button>) }
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        income: selectIncome(state.income, state.filters),
        uid: state.auth.uid
    };
};

const mapDispatchToProps = (dispatch) => ({
	startRemoveAllIncomes: () => dispatch(startRemoveAllIncomes()),
	removeAllIncomes: () => dispatch(removeAllIncomes())
});

export default connect(mapStateToProps, mapDispatchToProps)(IncomeList);


