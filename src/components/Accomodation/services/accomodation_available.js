import availableAccomodationData from '../../../data/accommodation_availability';
export const getAccomodationAvailableData = async () => {
  const response = await availableAccomodationData;

  return response.rooms;
};
