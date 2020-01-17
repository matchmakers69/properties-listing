import React from 'react';
import Button from './ButtonStyle';
import PropTypes from 'prop-types';

const ButtonAccomodation = ({ label, handleResetFilters }) => {
  return (
    <Button onClick={handleResetFilters} reset>
      <span>{label}</span>
    </Button>
  );
};

ButtonAccomodation.propTypes = {
  label: PropTypes.string.isRequired,
  handleResetFilters: PropTypes.func.isRequired
};

export default ButtonAccomodation;
