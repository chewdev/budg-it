import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_INCOME
export const addIncome = (income) => ({
    type: 'ADD_INCOME',
    income
});

export const startAddIncome = (incomeData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = incomeData;
        const income = { description, note, amount, createdAt };

        return database.ref(`users/${uid}/incomes`).push(income).then((ref) => {
            dispatch(addIncome({
                id: ref.key,
                ...income
            }));
        });
    };
};

// REMOVE_INCOME
export const removeIncome = (
    { id } = {}
) => ({
    type: 'REMOVE_INCOME',
    id
});

export const startRemoveIncome = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/incomes/${id}`).remove().then(() => {
            dispatch(removeIncome({
                id
            }));
        });
    };
};

export const removeIncomesChosen = ( ids = [] ) => ({
    type: 'REMOVE_INCOMES_CHOSEN',
    ids
});

export const startRemoveIncomesChosen = ( ids = [] ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        ids.forEach((id) => {
            return database.ref(`users/${uid}/incomes/${id}`).remove().then(() => {
            dispatch(removeIncome({ id }));
            });
        });
    };
};

// EDIT_INCOME
export const editIncome = ( id,  updates ) => ({
    type: 'EDIT_INCOME',
    id,
    updates
});

export const startEditIncome = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/incomes/${id}`).update(updates).then(() => {
            dispatch(editIncome(id, updates));
        });
    };
};

// SET_INCOMES
export const setIncomes = (incomes) => ({
    type: 'SET_INCOMES',
    incomes
});

export const startSetIncomes = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/incomes`)
            .once('value')
            .then((snapshot) => {
                const incomes = [];
    
                snapshot.forEach((childSnapshot) => {
                    incomes.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });  
                dispatch(setIncomes(incomes));
        });
        
    }
}

// // REMOVE_ALL INCOMES
// export const removeAllIncomes = () => ({
//     type: 'REMOVE_ALL_INCOMES'
// });

// export const startRemoveAllIncomes = () => {
//     return (dispatch, getState) => {
//         const uid = getState().auth.uid;
//         return database.ref(`users/${uid}/incomes`)
//             .set({})
//             .then(() => {
//                 dispatch(removeAllIncomes());
//             });
//     }
// }