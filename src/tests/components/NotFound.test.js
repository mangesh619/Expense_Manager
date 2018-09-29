import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFound';

test('should render NotFound',()=>{
    const wrapper = shallow(<NotFoundPage/>);
    
    expect(wrapper).toMatchSnapshot();
})