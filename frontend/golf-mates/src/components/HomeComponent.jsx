import React, { Component } from "react";
import UserService from "../UserService";
import { withRouter } from "../common/with-router";
import "bootstrap/dist/css/bootstrap.min.css";

class AddUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      location: "",
      handicap: "",
      hasCar: "",
    };

    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
  }

  componentDidMount() {
    UserService.getUserDetails().then((response) => {
      this.setState({ user: response.data });
    });
  }

  render() {
    return (
      <div className="container">
            <div>
              User Profile
            </div>
            <div>   
            Username: {user.username}
            Location: {user.location}
            Handicap: {user.handicap}
          </div>
        </div>
    );
  }
}

export default withRouter(AddUserComponent);
