import React from 'react';
import { Link } from 'react-router-dom';

export default ({ todo: { name, description, team, _id }, onDelete }) => {
  return (
    <div className="collection-item row">
      <div className="col s3">
        <p>
          <strong>{name}</strong> - <Link to={'/teams/' + team}> {team}</Link>
        </p>
      </div>

      <div className="col s8">
        <p>{description}</p>
      </div>
      <div className="col s1">
        <button
          className="btn btn-danger btn-small secondary-content"
          type="button"
          onClick={() => onDelete(_id)}
        >
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  );
};
