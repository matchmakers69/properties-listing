export const localization = (long, lat) => {
  return {
    type: 'FeatureCollection',
    crs: {
      type: 'name',
      properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' }
    },
    features: [
      {
        type: 'Feature',
        properties: {
          TEAM_ID: 960,
          FACILITYID: 28014,
          NAME: 'Accomodation',
          NAME_FR: '',
          ADDRESS: '',
          FACILITY_T: '',
          FACILITY_1: 'plat',
          ACCESSCTRL: 'no/non',
          ACCESSIBLE: 'no/non',
          OPEN: null,
          NOTES: 'Outdoor',
          MODIFIED_D: '2018/01/18',
          CREATED_DA: null,
          FACILITY: '',
          DESCRIPTIO: '',
          PICTURE__1: null
        },
        geometry: {
          type: 'Point',
          coordinates: [long, lat]
        }
      }
    ]
  };
};
