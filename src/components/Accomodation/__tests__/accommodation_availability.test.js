import { getAccomodationAvailableData } from '../services/accomodation_available';
jest.mock('../../../data/accommodation_availability', () => ({
  data: {
    rooms: [
      {
        id: 136,
        available: 1000,
        total: 6
      },
      {
        id: 137,
        available: 1,
        total: 1
      },
      {
        id: 138,
        available: 2,
        total: 2
      },
      {
        id: 151,
        available: 1,
        total: 1
      }
    ]
  }
}));

it('calls fake fetch accomodation_availability', async () => {
  const rooms = await getAccomodationAvailableData('blalala');
  expect(rooms[0].available).toBe(1000);
});
