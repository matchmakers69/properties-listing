import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../../../components/loader/PageLoader';

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

  console.log(propertyType);

  return (
    <Preloader isLoading={isLoading}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>title here</div>
        </div>
      </div>
    </Preloader>
  );
};

AccomodationTypeDetail.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default AccomodationTypeDetail;
