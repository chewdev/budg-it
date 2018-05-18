import React from 'react';
import { shallow } from 'enzyme';
import { BudgItSummary } from '../../components/BudgItSummary';
import expenses  from '../fixtures/expenses';
import income from '../fixtures/income';

test('should correctly render BudgItSummary with expenses and income', () => {
    const wrapper = shallow(<BudgItSummary expenses={expenses} income={income}  />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render BudgItSummary with expenses and no income', () => {
    const wrapper = shallow(<BudgItSummary expenses={expenses} income={[]}  />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render BudgItSummary with income and no expenses', () => {
    const wrapper = shallow(<BudgItSummary expenses={[]} income={income}  />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render BudgItSummary with no expenses and no income', () => {
    const wrapper = shallow(<BudgItSummary expenses={[]} income={[]}  />);
    expect(wrapper).toMatchSnapshot();
});