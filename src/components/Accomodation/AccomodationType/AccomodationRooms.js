import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getAccomodationAvailableData } from '../services/accomodation_available';
import { getRoomsByAvailability } from '../services/getRoomsByAvailability';
import _isEmpty from 'lodash/isEmpty';
import styles from './Styles.module.scss';
import AccomodationRoomsDetails from './AccomodationRoomsDetails';

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
    <>
      <ul className={styles.typesList}>
        {!_isEmpty(roomsAvailableById) ? (
          roomsAvailableById.map(item => {
            const { room, availability } = item;
            return (
              <AccomodationRoomsDetails
                key={room.id}
                room={room}
                availability={availability}
              />
            );
          })
        ) : (
          <p>No available room </p>
        )}
      </ul>
    </>
  );
};

export default AccomodationRooms;
