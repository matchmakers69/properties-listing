import { getAccomodationData } from '../services/accomodation';

jest.mock('../../../data/accommodation', () => ({
  data: {
    accommodations: [
      {
        id: 65900000,
        sort_order: 0,
        name: 'Hotel Garni Almhof - In Town - Central Mayrhofen',
        type: {
          id: 1,
          name: 'Hotel'
        },
        description:
          '<p>Alpine bliss! The Almhof sits in a meadow in Mayrhofen, surrounded by magnificent mountain views. Just a short stroll from the centre of the festival and the main ski lifts, you can escape the madness in minutes to chill on your balcony and watch the sun set behind the Penken, or relax in the reading lounge - with free WiFi. Ohh la la.</p> <p>Each room is kitted out with a TV, hairdryer, safe, telephone and balcony overlooking Mayrhofen&rsquo;s snow-capped mountains and the new spa area comes equipped with a Finnish sauna, steam bath and a gym.</p> <p>If you want great value, centrally located traditional Austrian accommodation with clean and simple Tyrolean themed d&eacute;cor, then look no further than the Almhof&hellip;</p>',
        address_1: 'Laubichl 141',
        address_2: '',
        address_3: 'Mayrhofen',
        postcode: 'A-6290',
        country: {
          id: 15,
          name: 'Austria'
        },
        resort: {
          id: 74,
          name: 'Mayrhofen Central'
        },
        location: {
          id: 522,
          location_long: 11.86708005850528,
          location_lat: 47.1726510645752,
          name: 'Hotel Garni Almhof'
        },
        images: [
          {
            alt: 'Dummy Image',
            title: 'Dummy Image',
            filename:
              'https://via.placeholder.com/500/EE5E55/ffffff/?text=Kaboodle'
          }
        ],
        rating: {
          id: 3,
          label: '3*'
        },
        facilities: [
          {
            id: 36,
            label: 'Balcony or Terrace'
          },
          {
            id: 1,
            label: 'En Suite'
          },
          {
            id: 8,
            label: 'Gardens'
          },
          {
            id: 28,
            label: 'Restaurant'
          },
          {
            id: 10,
            label: 'Safety Deposit Box'
          },
          {
            id: 33,
            label: 'Sat TV'
          },
          {
            id: 26,
            label: 'Sauna'
          },
          {
            id: 34,
            label: 'Telephone'
          },
          {
            id: 12,
            label: 'WIFI Access'
          }
        ],
        rooms: [
          {
            id: 129,
            sort_order: 450,
            type_id: 22,
            max_occupancy: 2,
            min_occupancy: 2,
            number_of_nights: 5,
            type: 'Austrian Twin/Double',
            name: 'Austrian Twin/Double'
          },
          {
            id: 130,
            sort_order: 0,
            type_id: 4,
            max_occupancy: 3,
            min_occupancy: 3,
            number_of_nights: 5,
            type: 'Triple',
            name: 'Triple'
          }
        ]
      }
    ]
  }
}));

it('calls accomodation fake fetch', async () => {
  const accomodation = await getAccomodationData('string');
  expect(accomodation[0].id).toBe(65900000);
});
