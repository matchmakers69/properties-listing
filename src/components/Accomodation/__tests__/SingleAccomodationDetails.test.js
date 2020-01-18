import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SingleAccomodationDetails from '../AccomodationType/SingleAccomodationDetails';
import AccomodationRooms from '../AccomodationType/AccomodationRooms';
import { findByTestAttr } from '../../../../tests/testUtils';
import { BrowserRouter } from 'react-router-dom';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({ Map: () => ({}) }));

Enzyme.configure({
  adapter: new Adapter()
});

const match = { params: { id: 'accomodation' } };

const setup = () => {
  return mount(
    <BrowserRouter>
      <SingleAccomodationDetails match={match} />
    </BrowserRouter>
  );
};

describe('<SingleAccomodationDetails />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
    wrapper.render();
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
    expect(
      wrapper.containsMatchingElement(<AccomodationRooms rooms={[]} />)
    ).toEqual(false);
  });

  it('passes isLoading to Preloader', () => {
    expect(wrapper.find('[data-test="pageLoader"]').prop('isLoading')).toEqual(
      true
    );
  });
});
