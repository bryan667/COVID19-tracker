import React from 'react';
import { Alert } from 'react-bootstrap';

const PrettyJson = ({ json, title = null }) => {
  return (
    <div className="row">
      <div className="col-md-12 white-bg">
        <Alert variant={'info'}>
          {title && <h4>{title}</h4>}
          <pre>{JSON.stringify(json, null, 2)}</pre>
        </Alert>
      </div>
    </div>
  );
};

export default PrettyJson;
