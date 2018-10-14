import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ todo: { name, description, team, _id }, onDelete }) => {
  return (
    <div style={styles}>
      <h4>Description: {description}</h4>
      <p>Name: {name}</p>
      <p>Team: {team}</p>
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => onDelete(_id)}
      >
        Remove
      </button>
    </div>
  );
};
