import React, { useState, useEffect, useCallback } from 'react';
import { getAccomodationData } from '../services/accomodation';

const AccomodationTypesDetails = ({ ...props }) => {
  const [isLoading, setisLoading] = useState(false);
  const [accomodation, setAccomodation] = useState([]);

  const fetchAccomodations = useCallback(async () => {
    setisLoading(true);
    try {
      const response = await getAccomodationData();
      setAccomodation(response);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [setisLoading, setAccomodation]);

  useEffect(() => {
    fetchAccomodations();
  }, [fetchAccomodations]);

  const id = props.match.params.id;

  console.log(accomodation);
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>title here</div>
        </div>
      </div>
    </>
  );
};

export default AccomodationTypesDetails;
