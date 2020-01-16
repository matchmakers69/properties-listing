export const getRoomsByAvailability = (rooms, availableRooms) => {
  let allRooms = [];
  allRooms = rooms.map(item => {
    const filteredByAvailability = availableRooms.filter(x => {
      return x.id === item.id;
    });

    return { room: item, availability: filteredByAvailability };
  });
  return allRooms;
};
