// SET_TEXT_FILTER
export const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: 'SET_SORT_FILTER',
    sortBy: 'amount'
});

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SET_SORT_FILTER',
    sortBy: 'date'
});

//SET_START_DATE
export const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
export const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
});

//SET_EXPENSE_PAGE
export const setExpensePage = ( expensePage ) => ({
    type: 'SET_EXPENSE_PAGE',
    expensePage
});

//SET_EXPENSE_PAGE
export const setIncomePage = ( incomePage ) => ({
    type: 'SET_INCOME_PAGE',
    incomePage
});