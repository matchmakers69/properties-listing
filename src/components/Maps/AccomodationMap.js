import React from 'react';
import PropTypes from 'prop-types';

const AccomodationMap = ({ location: { location_long, location_lat } }) => {
  return (
    <div className='row'>
      <div className='col-xs-12'>map</div>
    </div>
  );
};

AccomodationMap.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

export default AccomodationMap;
