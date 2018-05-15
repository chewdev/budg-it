import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import incomeReducer from '../reducers/income';

// Create and export store

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            income: incomeReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};



