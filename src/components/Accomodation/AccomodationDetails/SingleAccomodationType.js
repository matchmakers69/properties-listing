import React from 'react';
import styles from './Styles.module.scss';
import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';
import { Link } from 'react-router-dom';

const SingleAccomodationType = ({
  accomodationRate,
  accomodation: { name, images, id }
}) => {
  const imageObject =
    (images || !_isEmpty(images) || !_isNil(images)) && images[0];
  const imgSrc = imageObject ? images[0].filename : null;
  const imgAlt = imageObject ? images[0].alt : 'No image';

  return (
    <div className='col-xs-12 col-sm-6 col-md-4 margin-bottom'>
      <div className={styles.innerWrapper}>
        <Link
          to={`/accomodation-type/accomodation/${id}`}
          className={styles.accomodationBody}
        >
          <div className={styles.topWrapper}>
            <button className={styles.viewMoreBtn}>View more</button>
            <img src={imgSrc} alt={imgAlt} />
          </div>
        </Link>
        <div className={styles.accomodationHeader}>
          <h3 className={styles.accomodationTitle}>{name}</h3>
        </div>

        <footer className={styles.accomodationTypeFooter}>
          <div className={styles.ratingWrapper}>
            <p>
              This property has{' '}
              <span className={styles.starRating}>{accomodationRate}</span>{' '}
              stars
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SingleAccomodationType;
