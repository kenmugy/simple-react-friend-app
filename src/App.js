import React, { Component } from 'react';
import ActiveFriends from './ActiveFriends';
import InactiveFriends from './InactiveFriends';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { name: 'john', active: true },
        { name: 'jane', active: true },
        { name: 'pete', active: false }
      ],
      input: ''
    };
  }

  handleInput = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };

  handleRemoveFriend = name => {
    this.setState(prevState => {
      return {
        friends: prevState.friends.filter(friend => friend !== name)
      };
    });
  };

  handleRemoveAll = () => {
    this.setState({
      friends: []
    });
  };

  handleAddFriend = () => {
    this.setState(prevState => {
      const friends = [
        ...prevState.friends,
        { name: prevState.input, active: true }
      ];
      return {
        friends,
        input: ''
      };
    });
  };

  handleToggle = nam => {
    this.setState(prevState => {
      const { friends } = prevState;
      const friend = friends.find(frnd => frnd.name === nam);
      const newFriends = friends.filter(f => f !== friend);
      return {
        friends: [
          ...newFriends,
          {
            name: friend.name,
            active: !friend.active
          }
        ]
      };
    });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='add friend'
          onChange={this.handleInput}
          value={this.state.input}
        />
        <button onClick={this.handleAddFriend}>Submit</button>
        <br />
        <button onClick={this.handleRemoveAll}>Remove all</button>
        <h1>Active Friends</h1>
        <ActiveFriends
          friends={this.state.friends.filter(
            friends => friends.active === true
          )}
          remove={this.handleRemoveFriend}
          toggle={this.handleToggle}
        />
        <h1>Inactive Friends</h1>
        <InactiveFriends
          friends={this.state.friends.filter(
            friends => friends.active === false
          )}
          toggle={this.handleToggle}
        />
      </div>
    );
  }
}

export default App;
