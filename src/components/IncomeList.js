import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';
import ConfirmRemoveModal from './ConfirmRemoveModal';
import PageListItem from './PageListItem';
import selectIncome from '../selectors/income';
import { removeIncomesChosen, startRemoveIncomesChosen } from '../actions/income';
import { setIncomePage } from '../actions/filters';
import { changeModalStateIncome } from '../actions/modal';

export class IncomeList extends React.Component {

    onRemoveAllVisIncomes = () => {
        const ids = this.props.income.map((incomeItem) => incomeItem.id);
        if (this.props.uid !== 'anon') {
			this.props.startRemoveIncomesChosen(ids);
		} else {
			this.props.removeIncomesChosen(ids);
        }
        this.props.changeModalStateIncome();
    };

    handleChangeModalIncome = () => {
        this.props.changeModalStateIncome();
    };

    handleSetIncomePage = (page) => {
        this.props.setIncomePage(page);
    }

    setCurrentIncomes = () => {
        return this.props.income.slice(10 * this.props.incomePage - 10, 10 * this.props.incomePage);
    }

    setIncomePageElementList = () => {
        const pageElementList = [];
        const totalIncomePages = Math.ceil(this.props.income.length / 10);
        for (let i = 1; i <= totalIncomePages; i++) {
            pageElementList.push(<PageListItem isExpenseList={false} pageNumber={i} currPage={this.props.incomePage} setExpensePage={this.handleSetIncomePage} key={i} />);
        }
        return pageElementList;
    }

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
                        this.setCurrentIncomes().map((income) => (<IncomeListItem key={income.id} {...income}/>)) 
                    ) }
                     { !this.props.income.length ? null : (<button className="btn btn--income btn--remove-incomes" onClick={this.handleChangeModalIncome}>Remove Visible Incomes</button>) }
                    <ConfirmRemoveModal 
                        isOpen={this.props.isOpenIncome}
                        onConfirmRemoveAllVis={this.onRemoveAllVisIncomes}
                        handleCloseModal={this.handleChangeModalIncome}
                        itemType={"incomes"}
				    />
                    <div className="page-list">
                        {this.setIncomePageElementList()}
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        income: selectIncome(state.income, state.filters),
        uid: state.auth.uid,
        isOpenIncome: state.modal.isOpenIncome,
        incomePage: state.filters.incomePage
    };
};

const mapDispatchToProps = (dispatch) => ({
	startRemoveIncomesChosen: (ids) => dispatch(startRemoveIncomesChosen(ids)),
    removeIncomesChosen: (ids) => dispatch(removeIncomesChosen(ids)),
    changeModalStateIncome: () => dispatch(changeModalStateIncome()),
    setIncomePage: (num) => dispatch(setIncomePage(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(IncomeList);


