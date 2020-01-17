export const filterAccomodations = (accomodations, filterValue) => {
  let filteredAccomodations = accomodations;
  const { sortOrder } = filterValue;

  if (sortOrder) {
    if (sortOrder === 'higheststandard') {
      filteredAccomodations = filteredAccomodations.sort((a, b) => {
        return (
          b.rating.label.replace(/[^0-9.-]+/g, '') -
          a.rating.label.replace(/[^0-9.-]+/g, '')
        );
      });
    }

    if (sortOrder === 'loweststandard') {
      filteredAccomodations = filteredAccomodations.sort(
        (a, b) =>
          a.rating.label.replace(/[^0-9.-]+/g, '') -
          b.rating.label.replace(/[^0-9.-]+/g, '')
      );
    }
  }

  return filteredAccomodations;
};
