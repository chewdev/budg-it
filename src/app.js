import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 90 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 50, createdAt: 100 }));
const expenseThree = store.dispatch(addExpense({ description: 'TV Bill', amount: 200, createdAt: 2000 }));
const expenseFour = store.dispatch(addExpense({ description: 'Rent', amount: 5000, createdAt: 5000 }));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));

