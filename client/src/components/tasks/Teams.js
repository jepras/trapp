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
  }
  render() {
    var post = this.state.post;
    post = post.map(function(team, index) {
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
        <h4>{post}</h4>
      </div>
    );
  }
}

export default Teams;
