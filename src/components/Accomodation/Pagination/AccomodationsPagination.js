import React from 'react';
import cx from 'classnames';
import styles from './Styles.module.scss';
import PropTypes from 'prop-types';
import { getPageNumbers } from './services/pagination';

const AccomodationsPagination = ({
  accomodations,
  accomodationPerPage,
  currentPage,
  handlePaginationClick
}) => {
  const numberPages = getPageNumbers(accomodations, accomodationPerPage);
  const renderPageNumbers = numberPages.map((number, index) => {
    return (
      <li
        role='button'
        className={cx(
          styles.paginationItem,
          `${index + 1 === currentPage ? styles.activePag : ''}`
        )}
        key={number}
        id={number}
        onClick={() => handlePaginationClick(index + 1)}
      >
        <span className={styles.paginationNumbers}>{number}</span>
      </li>
    );
  });

  return (
    <div className='row'>
      <div className={cx('col-xs-12', `${styles.topPaginationWrapper}`)}>
        <span className={styles.numberOfPagesAlert}>Number of pages:</span>
        <ul className={styles.accomodationPaginationList}>
          {renderPageNumbers}
        </ul>
      </div>
    </div>
  );
};

AccomodationsPagination.propTypes = {
  accomodations: PropTypes.instanceOf(Array).isRequired,
  accomodationPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired
};

export default AccomodationsPagination;
