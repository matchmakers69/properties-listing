import React from 'react';
import styles from './Styles.module.scss';
import PropTypes from 'prop-types';

const Input = ({ name, type, value, maxLength, placeholder, onChange }) => {
  return (
    <input
      data-test='accomodationInput'
      className={styles.accomodationInput}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      type={type}
      name={name}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Input;
