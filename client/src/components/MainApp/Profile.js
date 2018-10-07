import React, { Component } from 'react';

const PROFILE = '/profile';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: ''
    };
  }

  componentDidMount() {
    fetch(PROFILE)
      .then(response => response.json())
      .then(data => this.setState({ profile: data }));
  };

  render() {

    const { profile } = this.state;

    return (
      <div>
        <p>show profile data: { this.props.username }</p>
        <p>show profile data: { this.state.username }</p>
        {this.state.profile ? 
         <p>{this.state.profile.name}</p> 
         :
         <p>loading ... </p>
        }
        <p>show profile data: {profile.name}</p>
      </div>

    );
  }
}

export default Profile