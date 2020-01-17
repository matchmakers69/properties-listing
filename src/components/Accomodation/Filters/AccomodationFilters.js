import React from 'react';
import styles from './Styles.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ButtonAccomodation from '../../../components/Buttons/ButtonAccomodation';
import Input from '../../Inputs/Input';

const AccomodationFilters = ({
  handleResetFilters,
  label,
  filterValue: { addressCode, ratingStar, stars, sortOrder, sortOrders },
  handleFilteronChange
}) => {
  const getSortOrderValue = sortOrder => {
    return sortOrder.replace(' ', '').toLowerCase();
  };
  return (
    <div className={cx('row', `${styles.filterRowMarginBottom}`)}>
      <div className='col-xs-12 col-sm-6 col-md-3'>
        {/^[0-9]+$/.test(addressCode) && !Number.isNaN(addressCode) ? (
          ''
        ) : (
          <span className={styles.postCodeAlertLabel}>
            Please make sure the format is correct eg. 25
          </span>
        )}
        <Input
          type='text'
          name='addressCode'
          value={addressCode.trim()}
          maxLength='6'
          placeholder='Search via postcode eg. 27'
          onChange={handleFilteronChange}
        />
      </div>

      <div className='col-xs-12 col-sm-6 col-md-3'>
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
      <div className='col-xs-12 col-sm-6 col-md-3'>
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
      <div className='col-xs-12 col-sm-6 col-md-3'>
        <ButtonAccomodation
          handleResetFilters={handleResetFilters}
          label={label}
        />
      </div>
    </div>
  );
};

AccomodationFilters.propTypes = {
  filterValue: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  handleResetFilters: PropTypes.func.isRequired
};

export default AccomodationFilters;
