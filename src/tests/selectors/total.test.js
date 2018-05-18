import selectTotal from '../../selectors/total';
import expenses from '../fixtures/expenses';
import income from '../fixtures/income';

test('should return total sum of all selected expenses amounts', () => {
    const total = Math.round(selectTotal(expenses) * 100);
    expect(total).toBe(Math.round(expenses[0].amount + expenses[1].amount + expenses[2].amount));
});

test('should return 0 if no expenses or incomes', () => {
    const total = selectTotal() * 100;
    expect(total).toBe(0);
});

test('should return single expenses total when passed one expense', () => {
    const total = selectTotal([expenses[0]]) * 100;
    expect(total).toBe(expenses[0].amount);
});

test('should return total sum of all selected income amounts', () => {
    const total = Math.round(selectTotal(income) * 100);
    expect(total).toBe(Math.round(income[0].amount + income[1].amount + income[2].amount));
});

test('should return difference of incomes minus expenses for budg-it', () => {
    const total = Math.round(selectTotal(expenses, income) * 100);
    expect(total).toBe(Math.round(income[0].amount + income[1].amount + income[2].amount - expenses[0].amount - expenses[1].amount - expenses[2].amount));
});