import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../../../components/loader/PageLoader';
import styles from './Styles.module.scss';
import GlobalContainer from '../../../styles/GlobalContainer';

const AccomodationTypeDetail = ({
  accomodationTypes,
  propertiesTypeId,
  isLoading
}) => {
  const [propertyType, setPropertyType] = useState({});
  useEffect(() => {
    if (accomodationTypes.length > 0) {
      const propertyTypeById = accomodationTypes.find(
        item => item.id === parseInt(propertiesTypeId, 10)
      );
      setPropertyType(propertyTypeById);
    }
  }, [accomodationTypes, propertiesTypeId]);

  const { type, accomodations } = propertyType;

  return (
    <Preloader isLoading={isLoading}>
      <GlobalContainer>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <header className={styles.propertyTypeHeader}>
                <h1 className='h1'>{type}</h1>
              </header>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </Preloader>
  );
};

AccomodationTypeDetail.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default AccomodationTypeDetail;
