import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getAccomodationAvailableData } from '../services/accomodation_available';
import { getRoomsByAvailability } from '../services/getRoomsByAvailability';
import _isEmpty from 'lodash/isEmpty';
import styles from './Styles.module.scss';

const AccomodationRooms = ({ rooms }) => {
  const [availableRooms, setAvailableRooms] = useState([]);
  const fetchAvailableRooms = useCallback(async () => {
    try {
      const rooms_available = await getAccomodationAvailableData();
      setAvailableRooms(rooms_available);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchAvailableRooms();
  }, [fetchAvailableRooms]);

  const roomsAvailableById = getRoomsByAvailability(rooms, availableRooms);

  return (
    <div>
      <h3 className={styles.roomTypeTitle}>Room type</h3>
      <ul className={styles.typesList}>
        {!_isEmpty(roomsAvailableById) ? (
          roomsAvailableById.map((item, index) => {
            const { room, availability } = item;
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
              <li key={id}>
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
          })
        ) : (
          <p>No available room </p>
        )}
      </ul>
    </div>
  );
};

export default AccomodationRooms;
