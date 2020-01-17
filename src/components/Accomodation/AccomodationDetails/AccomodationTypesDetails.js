import React from 'react';
import { AccomodationContext } from '../../../context/AccomodationContext';
import AccomodationTypeDetail from './AccomodationTypeDetail';

const AccomodationTypesDetails = props => {
  const id = props.match.params.id;

  return (
    <AccomodationContext.Consumer>
      {({ accomodationTypes, isLoading, getAccomodationTypeById }) => (
        <>
          <AccomodationTypeDetail
            accomodationTypes={accomodationTypes}
            propertiesTypeId={id}
            isLoading={isLoading}
            getAccomodationTypeById={getAccomodationTypeById}
          />
        </>
      )}
    </AccomodationContext.Consumer>
  );
};

export default AccomodationTypesDetails;
