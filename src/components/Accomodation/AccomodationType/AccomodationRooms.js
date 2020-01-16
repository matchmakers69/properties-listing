import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getAccomodationAvailableData } from '../services/accomodation_available';

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

  const getRoomsByAvailability = () => {
    let allRooms = [];
    allRooms = rooms.map(item => {
      const filteredByAvailability = availableRooms.filter(x => {
        return x.id === item.id;
      });

      return { room: item, availability: filteredByAvailability };
    });
    return allRooms;
  };
  const roomsAvailableById = getRoomsByAvailability();

  return <></>;
};

export default AccomodationRooms;
