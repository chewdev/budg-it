// Modal Reducer

const modalReducerDefaultState = {
    isOpen: false
};

export default (state = modalReducerDefaultState, action) => {
    switch (action.type) {
        case 'CHANGE_MODAL_STATE':
            return { 
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
};