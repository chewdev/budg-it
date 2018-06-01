// Modal Reducer

const modalReducerDefaultState = {
    isOpen: false,
    isOpenIncome: false
};

export default (state = modalReducerDefaultState, action) => {
    switch (action.type) {
        case 'CHANGE_MODAL_STATE':
            return {
                ...state, 
                isOpen: !state.isOpen
            };
        case 'CHANGE_MODAL_STATE_INCOME':
            return {
                ...state,
                isOpenIncome: !state.isOpenIncome 
            }
        default:
            return state;
    }
};