import React from "react";
import Modal from "react-modal";

const ConfirmRemoveModal = (props) => {
  Modal.setAppElement("body");
  return (
    <Modal
      contentLabel="Confirm Remove Modal"
      isOpen={props.isOpen}
      onRequestClose={props.handleCloseModal}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">
        Are you sure you want to remove all {props.itemType}?
      </h3>
      <button
        className="btn btn--confirm-remove"
        onClick={props.onConfirmRemoveAllVis}
      >
        Confirm Removal
      </button>
      <button
        className="btn btn--cancel-remove"
        onClick={props.handleCloseModal}
      >
        Cancel
      </button>
    </Modal>
  );
};

export default ConfirmRemoveModal;
