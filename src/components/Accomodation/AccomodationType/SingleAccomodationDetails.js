import React, { useState, useEffect, useCallback } from 'react';
import { getAccomodationData } from '../services/accomodation';
import Preloader from '../../Loader/PageLoader';
import GlobalContainer from '../../../styles/GlobalContainer';
import styles from './Styles.module.scss';
import _isEmpty from 'lodash/isEmpty';
import _isNull from 'lodash/isNull';
import _isUndefined from 'lodash/isUndefined';
import AccomodationRooms from './AccomodationRooms';

const SingleAccomodationDetails = props => {
  const id = props.match.params.id;
  const [accomodation, setAccomodation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const displayAccomodationDetails = useCallback(async () => {
    try {
      const responseData = await getAccomodationData();

      const foundAccomodationById = responseData.find(
        item => item.id === parseInt(id, 10)
      );
      setAccomodation(foundAccomodationById);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    displayAccomodationDetails();
  }, [displayAccomodationDetails]);

  const accomodationFound =
    !_isUndefined(accomodation) &&
    !_isEmpty(accomodation) &&
    !_isNull(accomodation)
      ? accomodation
      : {};

  const {
    name,
    description,
    location,
    facilities,
    rooms,
    type
  } = accomodationFound;
  const accmodationType = !_isEmpty(type) || !_isUndefined(type) ? type : {};

  return (
    <Preloader data-test='pageLoader' isLoading={isLoading}>
      {!isLoading && (
        <GlobalContainer>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <header className={styles.accomodationHeader}>
                  <h1 className={styles.accomodationTitle}>{name}</h1>
                  <span className={styles.accomodationType}>
                    Property type: {accmodationType.name}
                  </span>
                </header>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12 col-sm-6'>
                <h3 className={styles.innerTitle}>Description:</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                  className={styles.accomodationParagraph}
                />
              </div>
              <div className='col-xs-12 col-sm-6'>
                <div className='row'>
                  <div className='col-xs-12  col-md-6'>
                    <h3 className={styles.innerTitle}>Facilities:</h3>
                    <ul className={styles.innerList}>
                      {!_isEmpty(facilities) ? (
                        facilities.map((item, index) => {
                          return (
                            <li className={styles.facilityItem} key={item.id}>
                              <span
                                className={styles.facilityNumber}
                              >{`${index + 1}`}</span>
                              <span>{item.label}</span>
                            </li>
                          );
                        })
                      ) : (
                        <p>No facilities</p>
                      )}
                    </ul>
                  </div>

                  <div className='col-xs-12 col-md-6'>
                    <h3 className={styles.innerTitle}>Rooms:</h3>
                    <AccomodationRooms rooms={rooms} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlobalContainer>
      )}
    </Preloader>
  );
};

export default SingleAccomodationDetails;
