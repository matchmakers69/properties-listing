import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../Select';

configure({ adapter: new Adapter() });

const props = {
  onChange: jest.fn(),
  placeholder: 'Choose rating',
  value: '',
  type: '',
  name: '',
  options: []
};

describe('<Select />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Select {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
