import React from 'react';
import styles from './Styles.module.scss';
import cx from 'classnames';

const AccomodationFilters = ({
  filterValue: { sortOrder, sortOrders },
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
          id='sortorder'
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
    </div>
  );
};

export default AccomodationFilters;
