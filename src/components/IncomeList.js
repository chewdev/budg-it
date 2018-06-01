import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';
import ConfirmRemoveModal from './ConfirmRemoveModal';
import selectIncome from '../selectors/income';
import { removeIncomesChosen, startRemoveIncomesChosen } from '../actions/income';
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
                     { !this.props.income.length ? null : (<button className="btn btn--income btn--remove-incomes" onClick={this.handleChangeModalIncome}>Remove Visible Incomes</button>) }
                    <ConfirmRemoveModal 
                        isOpen={this.props.isOpenIncome}
                        onConfirmRemoveAllVis={this.onRemoveAllVisIncomes}
                        handleCloseModal={this.handleChangeModalIncome}
                        itemType={"incomes"}
				    />
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        income: selectIncome(state.income, state.filters),
        uid: state.auth.uid,
        isOpenIncome: state.modal.isOpenIncome
    };
};

const mapDispatchToProps = (dispatch) => ({
	startRemoveIncomesChosen: (ids) => dispatch(startRemoveIncomesChosen(ids)),
    removeIncomesChosen: (ids) => dispatch(removeIncomesChosen(ids)),
    changeModalStateIncome: () => dispatch(changeModalStateIncome())
});

export default connect(mapStateToProps, mapDispatchToProps)(IncomeList);


