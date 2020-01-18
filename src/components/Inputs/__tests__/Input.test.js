import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../Input';
import { findByTestAttr } from '../../../../tests/testUtils';

configure({ adapter: new Adapter() });

const props = {
  onChange: jest.fn(),
  placeholder: 'Search via postcode eg. 25',
  maxLength: '6',
  value: '198',
  type: '',
  name: ''
};

const setup = () => {
  return mount(<Input {...props} />);
};

const updateInput = (wrapper, selector, newValue, newName) => {
  const input = wrapper.find(selector);
  input.simulate('change', {
    target: { name: newName, value: newValue }
  });
  return wrapper.find(selector);
};

describe('<Input />', () => {
  let Input;

  beforeAll(() => {
    Input = setup();
  });

  it('Input component exists', () => {
    const component = findByTestAttr(Input, 'accomodationInput');
    expect(component.length).toBe(1);
  });

  it('Input should have placeholder', () => {
    expect(
      Input.find('[data-test="accomodationInput"]').props().placeholder
    ).toBe('Search via postcode eg. 25');
  });

  it('renders input with given value', () => {
    expect(Input.find('[data-test="accomodationInput"]').props().value).toEqual(
      '198'
    );
  });

  it('allows user to fill form', () => {
    const accomodationPostCode = updateInput(
      Input,
      '[data-test="accomodationInput"]',
      '222',
      '198'
    );
    expect(props.onChange).toBeCalledTimes(1);
    Input.find('[data-test="accomodationInput"]').simulate('change');

    expect(accomodationPostCode.props().value).toBe('198');
  });
});
