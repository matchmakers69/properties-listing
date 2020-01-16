import _isEmpty from 'lodash/isEmpty';

export const getSlicedAccomodations = (
  currentPage,
  accomodationPerPage,
  accomodations
) => {
  let limitedAccomodations = [];
  const indexOfLastAccomodation = currentPage * accomodationPerPage;
  const indexOfFirstAccomodation =
    indexOfLastAccomodation - accomodationPerPage;
  if (!_isEmpty(accomodations) && accomodations.length > 0) {
    limitedAccomodations = accomodations.slice(
      indexOfFirstAccomodation,
      indexOfLastAccomodation
    );
  }

  return limitedAccomodations;
};

export const getPageNumbers = (accomodations, accomodationPerPage) => {
  let pageNumbers = [];
  if (!_isEmpty(accomodations) && accomodations.length > 0) {
    for (
      let i = 1;
      i <= Math.ceil(accomodations.length / accomodationPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
  }

  return pageNumbers;
};
