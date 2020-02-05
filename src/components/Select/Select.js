import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  value,
  name,
  onChange,
  options,
  'data-test': dataTest,
  placeholder
}) => {
  return (
    <select value={value} name={name} data-test={dataTest} onChange={onChange}>
      {placeholder && (
        <option value='' disabled>
          {placeholder}
        </option>
      )}
      {options.map(opt => (
        <option key={opt.label} value={opt.value} label={opt.label}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  'data-test': PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Select;
