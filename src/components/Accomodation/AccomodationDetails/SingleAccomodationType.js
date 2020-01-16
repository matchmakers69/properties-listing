import React from 'react';
import styles from './Styles.module.scss';
import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';
import { Link } from 'react-router-dom';

const SingleAccomodationType = ({
  accomodation: { name, images, rooms, id }
}) => {
  const imageObject =
    (images || !_isEmpty(images) || !_isNil(images)) && images[0];
  const imgSrc = imageObject ? images[0].filename : null;
  const imgAlt = imageObject ? images[0].alt : 'No image';

  return (
    <div className='col-xs-12 col-sm-6 col-md-4 margin-bottom'>
      <div className={styles.innerWrapper}>
        <div className={styles.accomodationBody}>
          <div className={styles.topWrapper}>
            <img src={imgSrc} alt={imgAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAccomodationType;
