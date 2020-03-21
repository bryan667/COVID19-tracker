import React from 'react';
import { default as ReactSpinner } from 'react-spinkit';

const Spinner = () => {
  return (
    <div
      className="row"
      style={{ alignContent: 'center', justifyContent: 'center' }}
    >
      <ReactSpinner name="ball-spin-fade-loader" color="goldenrod" />
    </div>
  );
};

export default Spinner;
