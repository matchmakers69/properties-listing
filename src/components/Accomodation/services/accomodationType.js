import _groupBy from 'lodash/groupBy';

export const getAccomodationTypeByName = accomodation => {
  let accomodationType = [];
  const accomodationGroipedByName = _groupBy(
    accomodation,
    obj => obj.type.name
  );

  accomodationType = Object.keys(accomodationGroipedByName).map(
    (type, index) => {
      return {
        id: index + 1,
        type: type,
        accomodations: accomodationGroipedByName[type]
      };
    }
  );

  return accomodationType;
};
