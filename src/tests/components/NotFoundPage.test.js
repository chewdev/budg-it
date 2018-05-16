import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('should properly render the NotFoundPage component', () => {
    const wrapper = shallow(<NotFoundPage location={ {pathname: "/wrongpage"} } />);
    expect(wrapper).toMatchSnapshot();
});