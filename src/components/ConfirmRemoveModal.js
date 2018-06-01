import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startRemoveExpensesChosen, removeExpensesChosen } from '../actions/expenses';

const ConfirmRemoveModal = (props) => (
		<Modal 
			contentLabel="Confirm Remove Modal"
			isOpen={props.isOpen}
			onRequestClose={props.handleCloseModal}
			closeTimeoutMS={200}
			className="modal"
			>
			<h3 className="modal__title">Are you sure you want to remove all {props.itemType}?</h3>
            <button className="btn btn--confirm-remove" onClick={props.onConfirmRemoveAllVis}>Confirm Removal</button>
			<button className="btn btn--cancel-remove" onClick={props.handleCloseModal}>Cancel</button>
		</Modal>
);

export default ConfirmRemoveModal;