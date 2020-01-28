import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../../../tests/testUtils';
import AccomodationFilters from '../AccomodationFilters';

configure({ adapter: new Adapter() });

const props = {
  handleFilteronChange: jest.fn(),
  filterValue: {
    addressCode: '',
    ratingStar: '',
    stars: [],
    sortOrder: '',
    sortOrders: []
  },
  label: '',
  handleResetFilters: jest.fn(),
  value: ''
};

const setup = () => {
  return mount(<AccomodationFilters {...props} />);
};

describe('<AccomodationFilters />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = setup();
  });

  it('render component without crash', () => {
    const component = findByTestAttr(wrapper, 'accomodation-filters');
    expect(component.length).toBe(1);
  });
  it('calls select on change', () => {
    wrapper
      .find('[data-test="select-by-standard"]')
      .at(0)
      .simulate('change', { target: { value: 'higheststandard' } });

    expect(props.handleFilteronChange).toHaveBeenCalledTimes(1);
  });
});
