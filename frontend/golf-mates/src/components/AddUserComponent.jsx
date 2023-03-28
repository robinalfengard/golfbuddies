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
      handicap: "",
      hasCar: false,
      location: 1,
    };

    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeHandicapHandler = this.changeHandicapHandler.bind(this);
    this.changeHasCarHandler = this.changeHasCarHandler.bind(this);
    this.changeLocationHandler = this.changeLocationHandler.bind(this);
  }

  saveUser = (e) => {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      handicap: this.state.handicap,
      hasCar: this.state.hasCar,
      location: this.state.location,
    };

    UserService.addUser(user).then((res) => {
      this.props.router.navigate("/login");
    });
  };

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeHandicapHandler = (event) => {
    this.setState({ handicap: event.target.value });
  };
  changeHasCarHandler = (event) => {
    this.setState({ hasCar: event.target.value });
  };
  changeLocationHandler = (event) => {
    this.setState({ location: event.target.value });
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
                  <div>
                    <label> Handicap: </label>
                    <input
                      placeholder="Handicap"
                      name="handicap"
                      value={this.state.handicap}
                      onChange={(e) => this.changeHandicapHandler(e)}
                    />
                  </div>

                  <div>
                    <label> Car?: </label>
                    <input
                      type={"checkbox"}
                      placeholder="Car?"
                      name="hasCar"
                      value={this.state.hasCar}
                      onChange={(e) => this.changeHasCarHandler(e)}
                    />
                  </div>

                  <div>
                    <label> Location: </label>
                    <select
                      placeholder="Location"
                      name="location"
                      value={this.state.location}
                      onChange={(e) => this.changeLocationHandler(e)}
                    >
                      <option value="1">Stockholm</option>
                      <option value="2">Göteborg</option>
                      <option value="3">Malmö</option>
                    </select>
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
