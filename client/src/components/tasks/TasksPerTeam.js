import React, { Component } from 'react';

const TASKAPI = '/api/tasks?team=';

class Tasks extends Component {
  constructor(props) {
    super(props);

    // Initiate array for Teams & query for field input
    this.state = {
      teams: [],
      query: ''
    };
    // Set this for functions
    /*     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); */
  }

  getInitialState() {
    return {
      teams: []
    };
  }

  // Set state to input as user types
  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    var query = this.state.query;
    // Fetch from url + query
    fetch(TASKAPI + query)
      .then(function(data) {
        // return data as json & save in teams state
        return data.json();
      })
      .then(json => {
        this.setState({
          teams: json
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    // store teams within render to use in return
    var teams = this.state.teams;
    /* console.log(teams); */

    // map teams to function. Allows to get index & multiple teams
    teams = teams.map(function(team, index) {
      return (
        <div className="collection" key={index}>
          <div className="collection-item row">
            <div className="col s3">
              <p>
                <strong>{team.name}</strong>
              </p>
            </div>

            <div className="col s8">
              <p>{team.description}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        {/* triggers handle submit on submit */}
        <h1>Get tasks for specific team</h1>

        <form id="search" onSubmit={this.handleSubmit}>
          <label>Enter team:</label>
          {/* saves value in handleChange every time it changes */}
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="team name"
            required
          />{' '}
          {/* deleted value={this.state.value} */}
          <input type="submit" value="Find Teams" />
        </form>

        <ul>{teams}</ul>
        <h1>Add task</h1>
        {/*         <form id="add" onSubmit={this.handleAdd}>
          <label>Add new task</label>
          <input type="text" onChange={this.handleChangeWho} placeholder="name" />
          <input type="text" onChange={this.handleChangeDescription} placeholder="descr" />
          <input type="text" onChange={this.handleChangeDate} placeholder="date" />
          <input type="submit" value="Add task" />
        </form>
        <ul>{ tasks }</ul> */}
      </div>
    );
  }
}

export default Tasks;
