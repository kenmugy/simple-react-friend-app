import React from 'react';

const ActiveFriends = ({ friends, remove, toggle }) => {
  return (
    <div>
      <ul>
        {friends.map(friend => {
          return (
            <li key={friend.name}>
              {friend.name}
              <button onClick={() => remove(friend)}>Remove</button>
              <button onClick={() => toggle(friend.name)}>Deactivate</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ActiveFriends;
