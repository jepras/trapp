import React, { Component } from 'react';

class NewTask extends Component {
  state = {
    name: '',
    description: '',
    team: ''
  };

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
    if (
      this.state.name.trim() &&
      this.state.description.trim() &&
      this.state.team.trim()
    ) {
      this.props.onAddTodo(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      name: '',
      description: '',
      team: ''
    });
  };

  render() {
    return (
      <div className="container">
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

export default NewTask;
