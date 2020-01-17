import React from 'react';
import styles from './Styles.module.scss';

const Input = ({ name, type, value, maxLength, placeholder, onChange }) => {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      type={type}
      name={name}
    />
  );
};

export default Input;
