import React from 'react';
import { shallow } from 'enzyme';
import BudgItDashboardPage from '../../components/BudgItDashboardPage';

test('should properly render the BudgItDashboardPage component', () => {
    const wrapper = shallow(<BudgItDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});