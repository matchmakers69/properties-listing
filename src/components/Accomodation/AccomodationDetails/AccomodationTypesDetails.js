import React from 'react';
import { AccomodationContext } from '../../../context/AccomodationContext';
import AccomodationTypeDetail from './AccomodationTypeDetail';

const AccomodationTypesDetails = props => {
  const id = props.match.params.id;

  return (
    <AccomodationContext.Consumer>
      {({ accomodationTypes, isLoading, getAccomodationTypesById }) => (
        <>
          <AccomodationTypeDetail
            accomodationTypes={accomodationTypes}
            propertiesTypeId={id}
            isLoading={isLoading}
            getAccomodationTypesById={getAccomodationTypesById}
          />
        </>
      )}
    </AccomodationContext.Consumer>
  );
};

export default AccomodationTypesDetails;
