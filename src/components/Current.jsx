import React from 'react';
import { useCurrentUserQuery } from '../api/authLog';

function Current() {
  const { data, error, isLoading } = useCurrentUserQuery();

  if (isLoading) {
    return (
      <div className="spinnerContainer">
        <div className="spinner">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <div>
      <p>
        ID:
        {data.id}
      </p>
      <p>
        USERNAME:
        {data.username}
      </p>
    </div>
  );
}

export default Current;
