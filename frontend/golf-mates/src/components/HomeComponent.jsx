import React, { Component } from "react";
import UserService from "../UserService";
import { withRouter } from "../common/with-router";
import "bootstrap/dist/css/bootstrap.min.css";

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    UserService.getUserDetails(this.props.router.params.id).then((response) => {
      this.setState({ user: response.data });
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1>User Profile</h1>
        </div>
        <br></br>
        <div>
          Username: {this.state.user.username}
          <br></br>
          Location: {this.state.user.location}
          <br></br>
          Handicap: {this.state.user.handicap}
        </div>
        </div>
    );
  }
}

export default withRouter(HomeComponent);
