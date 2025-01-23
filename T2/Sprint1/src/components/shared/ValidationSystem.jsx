import React from 'react';

const ValidationSystem = ({ errors }) => {
  return (
    <ul className="validation-errors">
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  );
};

export default ValidationSystem;
