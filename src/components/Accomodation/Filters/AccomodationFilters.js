import React from 'react';
import styles from './Styles.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

const AccomodationFilters = ({
  filterValue: { ratingStar, stars, sortOrder, sortOrders },
  handleFilteronChange
}) => {
  const getSortOrderValue = sortOrder => {
    return sortOrder.replace(' ', '').toLowerCase();
  };
  return (
    <div className={cx('row', `${styles.filterRowMarginBottom}`)}>
      <div className='col-xs-12 col-md-4'>
        <p className={styles.labelParagraph}>Filter by standard</p>
        <select
          value={sortOrder}
          name='sortOrder'
          onChange={handleFilteronChange}
        >
          <option disabled value=''>
            Select from highest to lowest standard
          </option>
          {sortOrders.map((order, i) => (
            <option key={i} value={getSortOrderValue(order)}>
              {order}
            </option>
          ))}
        </select>
      </div>
      <div className='col-xs-12 col-md-4'>
        <p className={styles.labelParagraph}>Filter by raritg start</p>
        <select
          value={ratingStar}
          name='ratingStar'
          onChange={handleFilteronChange}
        >
          <option disabled value=''>
            Filter by stars
          </option>
          {stars.map((order, index) => (
            <option value={index + 1} key={index}>{`${order} stars`}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

AccomodationFilters.propTypes = {
  filterValue: PropTypes.instanceOf(Object).isRequired
};

export default AccomodationFilters;
