import React, { Component } from 'react';

class Teams extends Component {
  state = {
    post: []
  };

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.team_id;

    fetch('http://localhost:3000/api/tasks?team=' + id)
      .then(function(data) {
        return data.json();
      })
      .then(json => {
        this.setState({
          post: json
        });
      });
    console.log(this.post);

    /* .then(res => {
      this.setState({
        post: res.data
      });
      console.log(res.data);
    }); */
  }
  render() {
    var post = this.state.post;
    post = post.map(function(team, index) {
      return (
        <li key={index}>
          <p className={team.status.toString()} />
          <p className="name">Task owner: {team.name}</p>
          <p className="description">Task description: {team.description}</p>
          <p className="date">Date logged: {team.date}</p>
        </li>
      );
    });

    /* const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.name}</h4>
        <p>{this.state.post.description}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    ); */

    return (
      <div className="container">
        <h4>{post}</h4>
      </div>
    );
  }
}

export default Teams;
