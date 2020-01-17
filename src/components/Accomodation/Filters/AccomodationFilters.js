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
    <div className='row row-margin'>
      <div className='col-xs-12 col-md-4'>
        <h4>Filter by standard</h4>
        <select
          id='sortorder'
          value={sortOrder}
          name='sortOrder'
          onChange={handleFilteronChange}
        >
          <option disabled value=''>
            Choose...
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
