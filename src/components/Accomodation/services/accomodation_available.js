import { data } from '../../../data/accommodation_availability';
export const getAccomodationAvailableData = async () => {
  const response = await data;

  return response.rooms;
};
