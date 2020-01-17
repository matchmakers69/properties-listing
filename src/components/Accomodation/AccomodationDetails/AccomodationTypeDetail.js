import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import Preloader from '../../../components/loader/PageLoader';
import styles from './Styles.module.scss';
import GlobalContainer from '../../../styles/GlobalContainer';
import SingleAccomodationType from './SingleAccomodationType';
import { getSlicedAccomodations } from '../Pagination/services/pagination';

import AccomodationsPagination from '../Pagination/AccomodationsPagination';

const AccomodationTypeDetail = ({
  accomodationTypes,
  propertiesTypeId,
  isLoading,
  getAccomodationTypesById
}) => {
  const [propertyType, setPropertyType] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [accomodationPerPage, setAccomodationPerPage] = useState(6);

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

  console.log(accomodations);

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
          <AccomodationsPagination
            currentPage={currentPage}
            handlePaginationClick={handlePaginationClick}
            accomodationPerPage={accomodationPerPage}
            accomodations={accomodations}
          />
          <div className='row'>
            {!_isEmpty(accomodations) && accomodations.length > 0 ? (
              slicedAccomodations.map(getAccomodationTypeList)
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
  accomodationTypes: PropTypes.instanceOf(Array).isRequired
};

export default AccomodationTypeDetail;
