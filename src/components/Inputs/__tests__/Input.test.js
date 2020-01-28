import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../Input';

configure({ adapter: new Adapter() });

const props = {
  onChange: jest.fn(),
  placeholder: 'Search via postcode eg. 25',
  maxLength: '6',
  value: '199',
  type: '',
  name: ''
};

describe('<Input />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Input {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('input value change', () => {
    const onChange = jest.fn();

    const props = {
      value: '',
      name: '',
      input: {
        onChange
      },
      maxLength: '6',
      placeholder: 'Hello world',
      onChange
    };

    const component = mount(<Input {...props} />);

    const value = 'hello world';
    component.find('input').simulate('change', { target: { value } });

    expect(onChange.mock.calls[0][0].target).toEqual(
      expect.objectContaining({
        value
      })
    );

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: { value }
      })
    );
  });
});
