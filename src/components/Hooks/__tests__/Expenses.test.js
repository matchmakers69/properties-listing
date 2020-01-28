import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'fetch';
import { findByTestAttr } from '../../../../tests/testUtils';
import Expenses from '../Expenses';
configure({ adapter: new Adapter() });

global.fetch = fetch;

jest.mock('fetch');

const MOCKED_DATA = [
  {
    id: '1',
    name: 'Water',
    price: 28.12,
    bills: 'Utilities',
    paid: false
  }
];

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

describe('called fetch expenses from API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show loading', async () => {
    let wrapper;

    await act(async () => {
      wrapper = mount(<Expenses />);
    });

    wrapper.update();
    const preloader = findByTestAttr(wrapper, 'pageLoader');
    expect(preloader.length).toBe(1);
  });
  it('called fetch APi', async () => {
    global.fetch = mockFetch(MOCKED_DATA);

    let wrapper;

    await act(async () => {
      wrapper = mount(<Expenses />);
    });

    wrapper.update();
    const section = findByTestAttr(wrapper, 'expenses-section');
    expect(section.length).toBe(1);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
