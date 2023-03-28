import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../../UserService";

function SignupComponent() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    handicap: 0.0,
    hasCar: false,
    location: 1,
  });

  function registerUser(e) {
    e.preventDefault();
    console.log(user);
    // UserService.registerUser(user).then((res) => {
    //   navigate("/login");
    // });
  }

  function changeUsernameHandler(event) {
    setUser({ username: event.target.value });
  }

  const changePasswordHandler = (event) => {
    setUser({ password: event.target.value });
  };

  const changeHandicapHandler = (event) => {
    setUser({ handicap: event.target.value });
  };

  const changeHasCarHandler = (event) => {
    setUser({ hasCar: event.target.value });
  };

  const changeLocationHandler = (event) => {
    setUser({ location: event.target.value });
  };

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
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={user.username}
                    onChange={changeUsernameHandler}
                  />
                </div>
                <div>
                  <label> Password: </label>
                  <input
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={changePasswordHandler}
                  />
                </div>
                <div>
                  <label> Handicap: </label>
                  <input
                    placeholder="Handicap"
                    name="handicap"
                    value={user.handicap}
                    onChange={changeHandicapHandler}
                  />
                </div>

                <div>
                  <label> Car?: </label>
                  <input
                    type={"checkbox"}
                    placeholder="Car?"
                    name="hasCar"
                    value={user.hasCar}
                    onChange={changeHasCarHandler}
                  />
                </div>

                <div>
                  <label> Location: </label>
                  <select
                    placeholder="Location"
                    name="location"
                    value={user.location}
                    onChange={changeLocationHandler}
                  >
                    <option value="1">Stockholm</option>
                    <option value="2">Göteborg</option>
                    <option value="3">Malmö</option>
                  </select>
                </div>

                <button onClick={registerUser}>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
