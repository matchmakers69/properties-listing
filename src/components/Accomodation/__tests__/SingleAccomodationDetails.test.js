import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SingleAccomodationDetails from '../AccomodationType/SingleAccomodationDetails';
import AccomodationRooms from '../AccomodationType/AccomodationRooms';
import { findByTestAttr } from '../../../../tests/testUtils';

Enzyme.configure({
  adapter: new Adapter()
});

const match = { params: { id: 'accomodation' } };

const setup = () => {
  return shallow(<SingleAccomodationDetails match={match} />);
};

describe('<SingleAccomodationDetails />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('includes Preloader', () => {
    const preloader = findByTestAttr(wrapper, 'pageLoader');
    expect(preloader.length).toBe(1);
  });

  it('passes isLoading to Preloader', () => {
    expect(wrapper.find('[data-test="pageLoader"]').prop('isLoading')).toEqual(
      true
    );
  });

  it('includes AccomodationRooms', () => {
    expect(wrapper.containsMatchingElement(<AccomodationRooms />)).toEqual(
      false
    );
  });

  it('passes isLoading to Preloader', () => {
    expect(wrapper.find('[data-test="pageLoader"]').prop('isLoading')).toEqual(
      true
    );
  });
});
