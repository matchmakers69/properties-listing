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
      <option value='' disabled>
        {placeholder}
      </option>
      {options.map((opt, index) => {
        return (
          <option key={`${opt}-${index}`} value={opt.value} label={opt.label}>
            {opt.label}
          </option>
        );
      })}
    </select>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  'data-test': PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default Select;
