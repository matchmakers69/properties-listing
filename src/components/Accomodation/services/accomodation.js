import accomodationData from '../../../data/accommodation';
export const getAccomodationData = async () => {
  const response = await accomodationData;
  return response.accommodations;
};
