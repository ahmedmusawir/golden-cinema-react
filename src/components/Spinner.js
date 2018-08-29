import React from 'react';
import loadingImg from '../assets/progress.gif';

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src={loadingImg}
        alt="Loading ..."
        style={{
          width: '75px',
          margin: 'auto',
          paddingTop: '5rem',
          display: 'block'
        }}
      />
    </div>
  );
};

export default Spinner;
