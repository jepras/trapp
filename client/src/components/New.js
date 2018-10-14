import React, { Component } from 'react';

class New extends Component {
  constructor(props) {
    super(props);

    // Initiate states for field input
    this.state = {
      name: '',
      description: '',
      team: '',
      date: ''
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };
  handleTeamChange = e => {
    this.setState({ team: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let databody = {
      name: this.state.name,
      description: this.state.description,
      team: this.state.team,
      date: Date.now()
    };

    fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(databody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(this.props.callApi());
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            description
            <input
              type="text"
              name="description"
              value={this.description}
              onChange={this.handleDescriptionChange}
            />
          </label>
          <label>
            team
            <input
              type="text"
              name="team"
              value={this.team}
              onChange={this.handleTeamChange}
            />
          </label>
          <input type="submit" value="Add to DB" />
        </form>
      </div>
    );
  }
}

export default New;
