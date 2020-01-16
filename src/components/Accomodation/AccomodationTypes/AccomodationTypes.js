import React from 'react';
import styles from './Styles.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

const AccomodationTypes = ({ accomodationTypes }) => {
  return (
    <div className='row'>
      {accomodationTypes.map(accomodation => {
        const { id, type, accomodations } = accomodation;
        const accomodetionTypeAmount = accomodations.length;
        return (
          <div
            className={cx('col-xs-12 col-md-4', styles.accomodationColumn)}
            key={id}
          >
            <div className={styles.accomodationTypeWrapper}>
              <Link
                className={styles.accomodationTypeBody}
                to={`/accomodation-type/${id}`}
              >
                <div className={styles.columnContent}>
                  <header className={styles.columnTitleHeader}>
                    <h2 className={styles.accomodationTypeTitle}>{type}</h2>
                  </header>
                  <div className={styles.accomodationTypeInfo}>
                    <p>
                      {`Currently there are ${accomodetionTypeAmount} ${type}s`}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

AccomodationTypes.propTypes = {
  accomodationTypes: PropTypes.instanceOf(Array).isRequired
};

export default AccomodationTypes;
