export const filterAccomodations = (slicedAccomodations, filterValue) => {
  let filteredAccomodations = slicedAccomodations;
  const { sortOrder, ratingStar, addressCode } = filterValue;

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

  if (ratingStar) {
    const starRateAsNumber = ratingStar.replace(/[^0-9.-]+/g, '');

    filteredAccomodations = filteredAccomodations.filter(star => {
      return star.rating.label.replace(/[^0-9.-]+/g, '') === starRateAsNumber;
    });
  }

  if (addressCode) {
    // const postCodetonumber = addressCode.replace(/^[0-9]+$/);
    filteredAccomodations = filteredAccomodations.filter(accomodation => {
      const { postcode } = accomodation;
      if (postcode !== '') {
        return postcode.toLowerCase().indexOf(addressCode.toLowerCase()) !== -1;
      }
      return true;
    });
  }

  return filteredAccomodations;
};
