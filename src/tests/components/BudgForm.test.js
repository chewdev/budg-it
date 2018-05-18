import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
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

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<BudgForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'new description';
    const wrapper = shallow(<BudgForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'new note';
    const wrapper = shallow(<BudgForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount when passed valid data', () => {
    const value = '22.22';
    const wrapper = shallow(<BudgForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set new amount when passed invalid data', () => {
    const value = 'a2222';
    const wrapper = shallow(<BudgForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<BudgForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<BudgForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
});

test('should set calendarFocused onFocusChange', () => {
    const focused = true;
    const wrapper = shallow(<BudgForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});