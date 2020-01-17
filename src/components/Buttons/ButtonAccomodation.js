import React from 'react';
import Button from './ButtonStyle';

const ButtonAccomodation = ({ label }) => {
  return (
    <Button reset>
      <span>{label}</span>
    </Button>
  );
};

export default ButtonAccomodation;
