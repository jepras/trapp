import React, { Component } from 'react';
import { getCookie } from '../../utils/cookie'

const PROFILE = '/profile';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: [],
      user: []
    };
  }

  /* componentDidMount() {
    fetch(PROFILE)
      .then(response => response.json())
      .then(data => this.setState({ user: data }))
      .then(console.log(this.state.user))
      .then(console.log("virker det?"))
  }; */

  render() {
    console.log("cook", getCookie("awesomeCookie"))
    var cook = getCookie("awesomeCookie");
 /*    const { profile } = this.state; */
    const { user } = this.state;

    return (
      <div>
        {/* <p>show profile data: { profile.username }</p>
        <p>show profile data: { profile }</p>
        {profile ? 
         <p>Profile exists! : {profile._id}</p> 
         :
         <p>(no profile..) loading ... </p>
        }
        <p>show profile data: {profile}</p> */}
        {/* <ul>
          {profile.map(user =>
            <li key={user._id}>
              <p>{user.username}</p>
            </li>
          )}
        </ul> */}
        <p>{ user.username }</p>
        { cook ? <p>logged in </p> : <p>ralphs a fag fag</p> }
      </div>

    );
  }
}

export default Profile