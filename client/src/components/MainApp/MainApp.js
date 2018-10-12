import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import keys from '../../config/reactKeys'

const API = '/api/books';


class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      profile: ''
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ books: data }))
      .catch(err => console.log(err));

      
/*     fetch(PROFILE)
      .then(response => response.json())
      .then(data => this.setState({ profile: data })); */
  };

  
  render() {
    const { books } = this.state;
    const { profile } = this.state;

    return (
    <div>
      <div>
        <h1>Login</h1>
        <a class="google-btn" href={`${keys.host.localhost}/auth/google`}>Google+</a>
      </div>
        <h1>Books</h1>
      <div>
        <ul>
          {books.map(book =>
            <li key={book.id}>
              <Link to={`/roster/${book.__v}`}>{book.title}</Link>
            </li>
          )}
        </ul>
      </div>
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
    </div>
    );
  }
}

/* 
// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
    players: [
      { number: 1, name: "Ben Blocker", position: "G" },
      { number: 2, name: "Dave Defender", position: "D" },
      { number: 3, name: "Sam Sweeper", position: "D" },
      { number: 4, name: "Matt Midfielder", position: "M" },
      { number: 5, name: "William Winger", position: "M" },
      { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() { return this.players},
    get: function(id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    }
  }

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
    <div>
      <ul>
        {
          PlayerAPI.all().map(p => (
            <li key={p.number}>
              <Link to={`/roster/${p.number}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
  
  // The Player looks up the player using the number parsed from
  // the URL's pathname. If no player is found with the given
  // number, then a "player not found" message is displayed.
  const Player = (props) => {
    const player = PlayerAPI.get(
      parseInt(props.match.params.number, 10)
    )
    if (!player) {
      return <div>Sorry, but the player was not found</div>
    }
    return (
      <div>
        <h1>{player.name} (#{player.number})</h1>
        <h2>Position: {player.position}</h2>
        <Link to='/roster'>Back</Link>
      </div>
    )
  }
  
  // The Roster component matches one of two different routes
  // depending on the full pathname
  const Roster = () => (
    <Switch>
      <Route exact path='/roster' component={FullRoster}/>
      <Route path='/roster/:number' component={Player}/>
    </Switch>
  ) */

  export default MainApp