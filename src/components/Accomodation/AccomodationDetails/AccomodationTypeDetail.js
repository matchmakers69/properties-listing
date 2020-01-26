import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';
import styles from './Styles.module.scss';
import GlobalContainer from '../../../styles/GlobalContainer';
import SingleAccomodationType from './SingleAccomodationType';
import { getSlicedAccomodations } from '../Pagination/services/pagination';
import { filterAccomodations } from '../Filters/services/accomodationFilters';

import AccomodationsPagination from '../Pagination/AccomodationsPagination';
import AccomodationFilters from '../Filters/AccomodationFilters';
import { useHistory } from 'react-router-dom';
import { getPageNumbers } from '../Pagination/services/pagination';

const ACCOMODATION_PER_PAGE = 6;

const AccomodationTypeDetail = ({
  propertiesTypeId,
  getAccomodationTypeById
}) => {
  const [propertyType, setPropertyType] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const history = useHistory();

  // Initial state for filters
  const initialState = {
    ratingStar: '',
    stars: [1, 2, 3, 4],
    sortOrder: '',
    sortOrders: ['Highest Standard', 'Lowest Standard'],
    addressCode: ''
  };

  const filtersReducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [filterValue, setFilterValue] = useReducer(
    filtersReducer,
    initialState
  );

  const handleFilteronChange = event => {
    const { name, value } = event.target;
    setFilterValue({
      [name]: value
    });
  };

  useEffect(() => {
    const propertyTypeById = getAccomodationTypeById(propertiesTypeId);
    if (propertyTypeById) {
      setPropertyType(propertyTypeById);
    } else {
      history.push('/404');
    }
  }, [getAccomodationTypeById, history, propertiesTypeId]);

  const { type, accomodations = [] } = propertyType;

  const renderAccomodationList = accomodation => {
    const {
      rating: { label }
    } = accomodation;
    const rateIsAvailable = label !== 'N/A' ? label : '0*';
    const convertedRateToString = rateIsAvailable.replace(/[^0-9.-]+/g, '');
    const rateAsNumber = parseInt(convertedRateToString, 10);
    const accomodationRate = rateAsNumber !== 0 ? rateAsNumber : 'no';
    return (
      <SingleAccomodationType
        key={accomodation.id}
        accomodation={accomodation}
        accomodationRate={accomodationRate}
      />
    );
  };

  const slicedAccomodations = getSlicedAccomodations(
    currentPage,
    ACCOMODATION_PER_PAGE,
    accomodations
  );

  const setPageQueryParams = page => {
    history.push({ search: `?page=${page}` });
  };

  useEffect(() => {
    const pageFromParams = queryString.parse(window.location.search).page;
    
    const page = pageFromParams ? parseInt(pageFromParams, 10) : 1;
    console.log(pageFromParams)

    const totalPagesArray = getPageNumbers(
      accomodations,
      ACCOMODATION_PER_PAGE
    );
    const totalPagesLength = totalPagesArray.length;
    if (totalPagesArray.length) {
      if (page > totalPagesLength) {
        history.push('/404');
      }
    }

    setCurrentPage(page);
  }, [accomodations, history]);

  const handlePaginationClick = paginationIndex => {
    setCurrentPage(paginationIndex);
    setPageQueryParams(paginationIndex);
  };

  const accomodationsTypeList = filterAccomodations(
    slicedAccomodations,
    filterValue
  );

  const handleResetFilters = () => {
    setFilterValue({
      ratingStar: '',
      stars: [1, 2, 3, 4],
      sortOrder: '',
      sortOrders: ['Highest Standard', 'Lowest Standard'],
      addressCode: ''
    });
  };

  return (
    <GlobalContainer>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <header className={styles.propertyTypeHeader}>
              <h1 className='h1'>{`${type}s`}</h1>
            </header>
          </div>
        </div>
        <AccomodationFilters
          filterValue={filterValue}
          handleFilteronChange={handleFilteronChange}
          handleResetFilters={handleResetFilters}
          label='Reset filters'
        />
        <AccomodationsPagination
          currentPage={currentPage}
          handlePaginationClick={handlePaginationClick}
          accomodationPerPage={ACCOMODATION_PER_PAGE}
          accomodations={accomodations}
        />
        <div className='row'>
          {!_isEmpty(accomodationsTypeList) &&
          accomodationsTypeList.length > 0 ? (
            accomodationsTypeList.map(renderAccomodationList)
          ) : (
            <div className={styles.noAccomodationAlert}>
              <p>Sorry..., We could not find anything</p>
            </div>
          )}
        </div>
      </div>
    </GlobalContainer>
  );
};

AccomodationTypeDetail.propTypes = {
  propertiesTypeId: PropTypes.string.isRequired,
  getAccomodationTypeById: PropTypes.func.isRequired
};

export default AccomodationTypeDetail;
