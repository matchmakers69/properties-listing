import React from 'react';
import styles from './Styles.module.scss';
import _isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

const AccomodationRoomsDetails = ({ room, availability }) => {
  const {
    max_occupancy,
    min_occupancy,
    number_of_nights,
    type,
    name,
    price
  } = room;
  const priceRoom = !_isEmpty(price)
    ? price.price
    : 'Sorry there is no price to be displayed!';

  return (
    <li>
      <h3 className={styles.roomTypeTitle}>Room type</h3>
      <div className={styles.typesWrapper}>
        <h4 className={styles.typesHeader}>
          Name: <p>{name}</p>
        </h4>
      </div>
      <div className={styles.typesWrapper}>
        <h4 className={styles.typesHeader}>
          Type: <p>{type}</p>
        </h4>
      </div>
      <div className={styles.priceWrapper}>
        <h3 className={styles.typesPrice}>
          Price: <p>{priceRoom}</p>
        </h3>
      </div>
      <div className={styles.typesWrapper}>
        <h4 className={styles.typesHeader}>
          Min occupancy: <p>{min_occupancy}</p>
        </h4>
      </div>
      <div className={styles.typesWrapper}>
        <h4 className={styles.typesHeader}>
          Max occupancy: <p>{max_occupancy}</p>
        </h4>
      </div>
      <div className={styles.typesWrapper}>
        <h4 className={styles.typesHeader}>
          Number of night: <p>{number_of_nights}</p>
        </h4>
      </div>
      <div className={styles.availabilityWrapper}>
        <h3 className={styles.availabilityTitle}>Room availability</h3>
        <ul className={styles.roomsInformationList}>
          {!_isEmpty(availability) && availability.length > 0 ? (
            availability.map(item => {
              return (
                <li key={item.id}>
                  <span className={styles.infoRoom}>
                    Available: {item.available}
                  </span>
                  <span className={styles.infoRoom}>Total: {item.total}</span>
                </li>
              );
            })
          ) : (
            <p className={styles.soldOutAlert}>Sold Out</p>
          )}
        </ul>
      </div>
    </li>
  );
};

AccomodationRoomsDetails.propTypes = {
  room: PropTypes.instanceOf(Object).isRequired,
  availability: PropTypes.instanceOf(Array).isRequired
};

export default AccomodationRoomsDetails;
