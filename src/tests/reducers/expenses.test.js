import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should se default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense by faulty id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-999'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '99',
        description: 'Paid',
        note: '',
        amount: 5555,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense by id', () => {
    const updates = {
        description: 'bought something new',
        amount: 1111
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], { id: expenses[1].id, description: 'bought something new', note: expenses[1].note, amount: 1111, createdAt: expenses[1].createdAt }, expenses[2]]);
});

test('should not edit an expense if id not found', () => {
    const updates = {
        description: 'bought something else new',
        amount: 2222
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: -888,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const newExpenses = [{
        id: 1,
        description: 'some descript',
        amount: 777,
        note: 'no notes'
    }];
    const action = {
        type: 'SET_EXPENSES',
        expenses: newExpenses
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(newExpenses);
});