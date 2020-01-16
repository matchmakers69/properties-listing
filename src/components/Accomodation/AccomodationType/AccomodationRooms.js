import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getAccomodationAvailableData } from '../services/accomodation_available';
import { getRoomsByAvailability } from '../services/getRoomsByAvailability';

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
  console.log(roomsAvailableById);
  return <></>;
};

export default AccomodationRooms;
