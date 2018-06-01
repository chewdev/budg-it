import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ConfirmRemoveModal from './ConfirmRemoveModal';
import selectExpenses from '../selectors/expenses';
import { startRemoveAllExpenses, removeAllExpenses, removeExpense, startRemoveExpense, removeExpensesChosen, startRemoveExpensesChosen } from '../actions/expenses';
import { changeModalState } from '../actions/modal';

export class ExpenseList extends React.Component { 
    onRemoveAll = () => {
        if (this.props.uid !== 'anon') {
			this.props.startRemoveAllExpenses();
		} else {
			this.props.removeAllExpenses();
		}
    };

    onRemoveAllVis = () => {
        const ids = this.props.expenses.map((expense) => expense.id);
        if (this.props.uid !== 'anon') {
            this.props.startRemoveExpensesChosen(ids);
			//this.props.expenses.forEach((expense) => startRemoveExpense({ id: expense.id }));
		} else {
            this.props.removeExpensesChosen(ids);
			//this.props.expenses.forEach((expense) => removeExpense({ id: expense.id }));
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
	startRemoveAllExpenses: () => dispatch(startRemoveAllExpenses()),
    removeAllExpenses: () => dispatch(removeAllExpenses()),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
    removeExpense: (id) => dispatch(removeExpense(id)),
    removeExpensesChosen: (ids) => dispatch(removeExpensesChosen(ids)),
    startRemoveExpensesChosen: (ids) => dispatch(startRemoveExpensesChosen(ids)),
    changeModalState: () => dispatch(changeModalState())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
