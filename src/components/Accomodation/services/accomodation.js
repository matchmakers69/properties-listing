import { data } from '../../../data/accommodation';

export const getAccomodationData = async () => {
  const response = await data;
  return response.accommodations;
};
