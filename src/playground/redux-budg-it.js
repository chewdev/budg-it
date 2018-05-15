import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    { 
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = (
    { id } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = ( id,  updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SET_SORT_FILTER',
    sortBy: 'amount'
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SET_SORT_FILTER',
    sortBy: 'date'
});

//SET_START_DATE
const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id);
            // instructor solution was:
            // return state.filter(({id})) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
};


// Filters Reducer

const filtersReducerDefaultState = { 
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
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
        default:
            return state;
    }
};

// timestamps counted in milliseconds
// starts at January 1st, 1970 (unix epoch)

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Create Store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);



store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Course', amount: 1000, createdAt: 100 }));


// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 50 }));

// store.dispatch(setTextFilter('re'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(-100));
store.dispatch(setEndDate(250));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

// console.log(expenseOne.expense.id);

// console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'dfslkfja',
        description: 'January Rent',
        note: 'Sent it out on the 1st and it was cashed on the 3rd',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',  //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Jen',
//     age: 24
// };

// const newUser = {};

// Object.keys(user).map((key) => {
//     newUser[key] = user[key];
// });

// user.pets = 'dog';

// console.log(newUser);


// console.log({
//     ...user,
//     location: 'LA',
//     age: 26
// });