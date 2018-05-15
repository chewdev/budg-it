import uuid from 'uuid';

// ADD_INCOME
export const addIncome = (
    {  
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_INCOME',
    income: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_INCOME
export const removeIncome = (
    { id } = {}
) => ({
    type: 'REMOVE_INCOME',
    id
});

// EDIT_INCOME
export const editIncome = ( id,  updates ) => ({
    type: 'EDIT_INCOME',
    id,
    updates
});