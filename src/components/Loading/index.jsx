import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div className="loading-container d-flex justify-content-center align-items-center">
      <Spinner animation="border"size="lg" />
    </div>
  );
}

export default Loading;
