import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import BudgForm from '../../components/BudgForm';

test('should render BudgForm correctly', () => {
    const wrapper = shallow(<BudgForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render BudgForm with expense data', () => {
    const wrapper = shallow(<BudgForm expense={ expenses[0] } />);
    expect(wrapper).toMatchSnapshot();
});