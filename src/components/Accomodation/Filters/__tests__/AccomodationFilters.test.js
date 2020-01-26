import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AccomodationFilters from '../AccomodationFilters';

configure({ adapter: new Adapter() });

const props = {
  handleFilteronChange: jest.fn()
};

const setup = () => {
  return mount(<AccomodationFilters {...props} />);
};

describe('<AccomodationFilters />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = setup();
  });

  it('call change select by standard', () => {
    wrapper
      .find('[data-test="select-by-standard"]')
      .simulate('change', { target: { value: 100 } });
    expect(props.handleFilterChange).toHaveBeenCalledTimes(1);
  });
});
