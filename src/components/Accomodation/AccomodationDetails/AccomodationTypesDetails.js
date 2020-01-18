import React from 'react';
import { AccomodationContext } from '../../../context/AccomodationContext';
import AccomodationTypeDetail from './AccomodationTypeDetail';
import withLoader from '../../../hocs/withLoader';

const AccomodationTypesDetails = props => {
  const id = props.match.params.id;

  return (
    <AccomodationContext.Consumer>
      {({ accomodationTypes, isLoading, getAccomodationTypeById }) => (
        <>
          <AccomodationTypeDetail
            accomodationTypes={accomodationTypes}
            propertiesTypeId={id}
            getAccomodationTypeById={getAccomodationTypeById}
          />
        </>
      )}
    </AccomodationContext.Consumer>
  );
};

export default withLoader(AccomodationTypesDetails);
