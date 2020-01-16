import React, { useState, useEffect, useCallback } from 'react';
import { getAccomodationData } from '../services/accomodation';
import Preloader from '../../loader/PageLoader';
import GlobalContainer from '../../../styles/GlobalContainer';

const SingleAccomodationDetails = props => {
  const id = props.match.params.id;
  const [accomodation, setAccomodation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const displayAccomodationDetails = useCallback(async () => {
    try {
      const responseData = await getAccomodationData();
      if (responseData.length > 0) {
        const foundAccomodationById = responseData.find(
          item => item.id === parseInt(id, 10)
        );
        setAccomodation(foundAccomodationById);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  useEffect(() => {
    displayAccomodationDetails();
  }, [displayAccomodationDetails]);

  const { name, description, location, facilities, rooms } = accomodation;

  return (
    <Preloader isLoading={isLoading}>
      <GlobalContainer>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'></div>
          </div>
        </div>
      </GlobalContainer>
    </Preloader>
  );
};

export default SingleAccomodationDetails;
