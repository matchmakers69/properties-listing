import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../Input';
import toJson from 'enzyme-to-json';

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

  // it('Input component exists', () => {
  //   const component = findByTestAttr(Input, 'accomodationInput');
  //   expect(component.length).toBe(1);
  // });

  // it('Input should have placeholder', () => {
  //   expect(
  //     Input.find('[data-test="accomodationInput"]').props().placeholder
  //   ).toBe('Search via postcode eg. 25');
  // });

  // it('renders input with given value', () => {
  //   expect(Input.find('[data-test="accomodationInput"]').props().value).toEqual(
  //     '198'
  //   );
  // });

  // it('simulate change', () => {
  //   const accomodationPostCode = updateInput(
  //     Input,
  //     '[data-test="accomodationInput"]',
  //     '198',
  //     '198'
  //   );
  //   expect(props.onChange).toBeCalledTimes(1);
  //   Input.find('[data-test="accomodationInput"]').simulate('change');

  //   expect(accomodationPostCode.props().value).toBe('198');
  // });
});
