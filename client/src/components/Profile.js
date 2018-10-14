import React from 'react';

const Profile = props => {
  const { name, id } = props;

  return (
    <div>
      <h1>Props</h1>
      <p>
        {name} & {id}
      </p>
    </div>
  );
};

export default Profile;
