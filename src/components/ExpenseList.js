import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ConfirmRemoveModal from './ConfirmRemoveModal';
import PageListItem from './PageListItem';
import selectExpenses from '../selectors/expenses';
import { removeExpensesChosen, startRemoveExpensesChosen } from '../actions/expenses';
import { setExpensePage } from '../actions/filters';
import { changeModalState } from '../actions/modal';

export class ExpenseList extends React.Component { 

    onRemoveAllVis = () => {
        const ids = this.props.expenses.map((expense) => expense.id);
        if (this.props.uid !== 'anon') {
            this.props.startRemoveExpensesChosen(ids);
		} else {
            this.props.removeExpensesChosen(ids);
        }
        this.props.changeModalState();
    };

    handleChangeModal = () => {
        this.props.changeModalState();
    };

    handleSetExpensePage = (page) => {
        this.props.setExpensePage(page);
    }

    setCurrentExpenses = () => {
        return this.props.expenses.slice(10 * this.props.expensePage - 10, 10 * this.props.expensePage);
    }

    setPageElementList = () => {
        const pageElementList = [];
        const totalExpensePages = Math.ceil(this.props.expenses.length / 10);
        for (let i = 1; i <= totalExpensePages; i++) {
            pageElementList.push(<PageListItem isExpenseList={true} pageNumber={i} currPage={this.props.expensePage} setExpensePage={this.handleSetExpensePage} key={i} />);
        }
        return pageElementList;
    }

    render(props) {
        return (
            <div className="content-container">
                <div className="list-header">
                    <div className="mobile-visible">Expenses</div>
                    <div className="large-screen-visible">Expense</div>
                    <div className="large-screen-visible">Amount</div>
                </div>
                {!this.props.expenses.length ? (
                        <div className="list-item list-item--message">
                            <span>No expenses match query</span>
                        </div>
                    ) : (
                        this.setCurrentExpenses().map((expense) => (<ExpenseListItem key={expense.id} {...expense}/>)) 
                    ) }
                { !this.props.expenses.length ? null : (<button className="btn btn--expense btn--remove-expenses" onClick={this.handleChangeModal}>Remove Visible Expenses</button>) }
                <ConfirmRemoveModal 
                    isOpen={this.props.isOpen}
                    itemType={"expenses"}
                    expenses={this.props.expenses}
                    onConfirmRemoveAllVis={this.onRemoveAllVis}
					handleCloseModal={this.handleChangeModal} 
				/>
                <div className="page-list">
                    {this.setPageElementList()}
                </div>
            </div>
        )};
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        uid: state.auth.uid,
        isOpen: state.modal.isOpen,
        expensePage: state.filters.expensePage 
    };
};

const mapDispatchToProps = (dispatch) => ({
    removeExpensesChosen: (ids) => dispatch(removeExpensesChosen(ids)),
    startRemoveExpensesChosen: (ids) => dispatch(startRemoveExpensesChosen(ids)),
    changeModalState: () => dispatch(changeModalState()),
    setExpensePage: (num) => dispatch(setExpensePage(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
