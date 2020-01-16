import _groupBy from 'lodash/groupBy';
import uuidv4 from 'uuid/v4';

export const getAccomodationTypeByName = accomodation => {
  let accomodationType = [];
  const accomodationGroipedByName = _groupBy(
    accomodation,
    obj => obj.type.name
  );

  accomodationType = Object.keys(accomodationGroipedByName).map(type => {
    return {
      id: uuidv4(),
      type: type,
      accomodations: accomodationGroipedByName[type]
    };
  });

  return accomodationType;
};
