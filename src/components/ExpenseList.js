import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ConfirmRemoveModal from './ConfirmRemoveModal';
import selectExpenses from '../selectors/expenses';
import { removeExpensesChosen, startRemoveExpensesChosen } from '../actions/expenses';
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
                        this.props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense}/>)) 
                    ) }
                { !this.props.expenses.length ? null : (<button className="btn btn--expense btn--remove-expenses" onClick={this.handleChangeModal}>Remove Visible Expenses</button>) }
                <ConfirmRemoveModal 
                    isOpen={this.props.isOpen}
                    itemType={"expenses"}
                    expenses={this.props.expenses}
                    onConfirmRemoveAllVis={this.onRemoveAllVis}
					handleCloseModal={this.handleChangeModal} 
				/>
            </div>
        )};
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        uid: state.auth.uid,
        isOpen: state.modal.isOpen
    };
};

const mapDispatchToProps = (dispatch) => ({
    removeExpensesChosen: (ids) => dispatch(removeExpensesChosen(ids)),
    startRemoveExpensesChosen: (ids) => dispatch(startRemoveExpensesChosen(ids)),
    changeModalState: () => dispatch(changeModalState())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
