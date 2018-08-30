import React from 'react';

const SoldOut = () => {
  return (
    <div className="container text-center">
      <div className="row container-body my-5 p-5 animated fadeIn">
        <h1 className="text-danger mx-auto col-12">Sorry! </h1>
        <h4 className="col-12 mx-auto">
          This product is sold out at the moment. Please check back with us in a
          week. Thank you for you patience.
        </h4>
      </div>
      {/* end row */}
    </div>
    // end container
  );
};

export default SoldOut;
