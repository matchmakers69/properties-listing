import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import Preloader from '../../Loader/PageLoader';
import styles from './Styles.module.scss';
import GlobalContainer from '../../../styles/GlobalContainer';
import SingleAccomodationType from './SingleAccomodationType';
import { getSlicedAccomodations } from '../Pagination/services/pagination';
import { filterAccomodations } from '../Filters/services/accomodationFilters';

import AccomodationsPagination from '../Pagination/AccomodationsPagination';
import AccomodationFilters from '../Filters/AccomodationFilters';

const AccomodationTypeDetail = ({
  accomodationTypes,
  propertiesTypeId,
  isLoading,
  getAccomodationTypesById
}) => {
  const [propertyType, setPropertyType] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [accomodationPerPage, setAccomodationPerPage] = useState(6);

  // Initial state for filters
  const initialState = {
    sortOrder: '',
    sortOrders: ['Highest Standard', 'Lowest Standard']
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
    if (accomodationTypes.length > 0) {
      const propertyTypeById = getAccomodationTypesById(propertiesTypeId);
      setPropertyType(propertyTypeById);
    }
  }, [accomodationTypes.length, getAccomodationTypesById, propertiesTypeId]);

  const { type, accomodations = [] } = propertyType;

  const getAccomodationTypeList = accomodation => {
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
    accomodationPerPage,
    accomodations
  );

  const handlePaginationClick = paginationIndex => {
    setCurrentPage(paginationIndex);
  };

  const accomodationsTypeList = filterAccomodations(
    slicedAccomodations,
    filterValue
  );

  return (
    <Preloader isLoading={isLoading}>
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
          />
          <AccomodationsPagination
            currentPage={currentPage}
            handlePaginationClick={handlePaginationClick}
            accomodationPerPage={accomodationPerPage}
            accomodations={accomodations}
          />
          <div className='row'>
            {!_isEmpty(accomodations) && accomodations.length > 0 ? (
              accomodationsTypeList.map(getAccomodationTypeList)
            ) : (
              <p>Sorry no accomodation here</p>
            )}
          </div>
        </div>
      </GlobalContainer>
    </Preloader>
  );
};

AccomodationTypeDetail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  propertiesTypeId: PropTypes.string.isRequired,
  accomodationTypes: PropTypes.instanceOf(Array).isRequired,
  getAccomodationTypesById: PropTypes.func.isRequired
};

export default AccomodationTypeDetail;
