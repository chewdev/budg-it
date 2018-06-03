import moment from 'moment';
// Filters Reducer

const filtersReducerDefaultState = { 
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    totalExpensePages: 0,
    totalIncomePages: 0,
    expensePage: 1,
    incomePage: 1
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_SORT_FILTER':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        case 'SET_EXPENSE_PAGE':
            return {
                ...state,
                expensePage: action.expensePage
            };
        case 'SET_INCOME_PAGE':
            return {
                ...state,
                incomePage: action.incomePage
            }
        default:
            return state;
    }
};