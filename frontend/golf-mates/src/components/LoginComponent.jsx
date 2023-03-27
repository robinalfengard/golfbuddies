import React, { Component } from "react";
import UserService from "../UserService";
import { withRouter } from "../common/with-router";
import "bootstrap/dist/css/bootstrap.min.css";

class AddUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
  }

  saveUser = (e) => {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    UserService.addUser(user).then((res) => {
      this.props.router.navigate("/");
    });
  };

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  cancel() {
    // this.props.router.navigate("/login");
  }

  render() {
    return (
      <div>
        <br></br>
        <div>
          <div>
            <div>
              Sign Up
              <div>
                <form>
                  <div>
                    <label> Username: </label>
                    <input
                      placeholder="Username"
                      name="username"
                      value={this.state.username}
                      onChange={(e) => this.changeUsernameHandler(e)}
                    />
                  </div>
                  <div>
                    <label> Password: </label>
                    <input
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={(e) => this.changePasswordHandler(e)}
                    />
                  </div>

                  <button onClick={this.saveUser}>Save</button>
                  {/* <button
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddUserComponent);
