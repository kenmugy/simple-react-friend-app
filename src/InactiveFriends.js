import React from 'react';

const InactiveFriends = ({ friends, toggle }) => {
  return (
    <div>
      <ul>
        {friends.map(friend => {
          return (
            <li key={friend.name}>
              {friend.name}{' '}
              <button onClick={() => toggle(friend.name)}>Activate</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default InactiveFriends;
