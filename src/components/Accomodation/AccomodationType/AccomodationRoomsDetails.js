import React from 'react';
import styles from './Styles.module.scss';
import _isEmpty from 'lodash/isEmpty';

const AccomodationRoomsDetails = ({ room }) => {
  const {
    id,
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
  console.log(priceRoom);
  return (
    <li>
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
    </li>
  );
};

export default AccomodationRoomsDetails;
