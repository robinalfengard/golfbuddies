import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../../services//UserService";
import LocationService from "../../services/LocationService";
import GolfClubService from "../../services/GolfClubService";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
import TopNavbar from "../landing/Nav/TopNavbar";

function SignupComponent(props) {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [repeatpassword, setRepeatpassword] = useState("");
  const [error, setError] = useState({ repeatpassword: "" });
  const [districts, setDistricts] = useState([{ "": "" }]);
  const [districtsId, setDistrictsid] = useState("");
  const [golfclubs, setGolfclubs] = useState([]);
  const [user, setUser] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  useEffect(() => {
    getDistrictList();
  }, []);

  useEffect(() => {
    getGolfClubs(user.locationId);
  }, [user.locationId]);

  async function getDistrictList() {
    LocationService.getDistricts().then((response) => {
      setDistricts(response.data);
    });
  }

  async function getGolfClubs(id) {
    GolfClubService.getGolfClubs(id).then((response) => {
      setGolfclubs(response.data);
    });
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log(user);
      UserService.registerUser(user);
      closeHandler(this);
    }
    event.preventDefault();
    setValidated(true);
  };

  function changeUsernameHandler(event) {
    setUser((prevState) => ({ ...prevState, username: event.target.value }));
  }

  const changePasswordHandler = (event) => {
    setUser((prevState) => ({ ...prevState, password: event.target.value }));
  };

  const changeHandicapHandler = (event) => {
    setUser((prevState) => ({
      ...prevState,
      handicap: parseFloat(event.target.value),
    }));
  };

  const changeRepeatPasswordHandler = (event) => {
    setRepeatpassword(event.target.value);
  };

  const handleBlur = (event) => {
    if (event.target.validity.patternMismatch) {
      setError({ repeatpassword: "Passwords doesn't match." });
    } else {
      setError({ repeatpassword: "" });
    }
  };

  const changeDistrictHandler = (event) => {
    setUser((prevState) => ({
      ...prevState,
      locationId: parseInt(event.target.value),
    }));
  };

  const changeGolfClubHandler = (event) => {
    setUser((prevState) => ({
      ...prevState,
      golfclubsId: parseInt(event.target.value),
    }));
  };

  const changeSexHandler = (event) => {
    setUser((prevState) => ({
      ...prevState,
      sex: event.target.value,
    }));
  };

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <div className="semiBold font15 pointer">
          <h2>{props.title}</h2>
        </div>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <FloatingLabel controlId="floatingUsername" label="Username">
              <Form.Control
                required
                size="sm"
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={changeUsernameHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please enter an username.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHandicap">
            <FloatingLabel label="Handicap" className="mb-3">
              <Form.Control
                required
                type="number"
                placeholder="Handicap"
                name="handicap"
                value={user.handicap}
                onChange={changeHandicapHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your handicap.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <FloatingLabel label="Password" className="mb-3">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={changePasswordHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <FloatingLabel label="Repeat Password" className="mb-3">
              <Form.Control
                required
                type="password"
                placeholder="Repeat Password"
                onBlur={handleBlur}
                pattern={user.password}
                value={repeatpassword}
                onChange={changeRepeatPasswordHandler}
              />
            </FloatingLabel>
            <span>{error.repeatpassword}</span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLocation">
            <FloatingLabel label="Golf district" className="mb-3">
              <Form.Select
                id="golfdistrict"
                placeholder="Golf District"
                name="golfdistrict"
                value={user.locationId}
                onChange={changeDistrictHandler}
                onSelect={changeDistrictHandler}
              >
                {districts.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.district}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formClub">
            <FloatingLabel label="Golf Club" className="mb-3">
              <Form.Select
                id="golfclubs"
                placeholder="Golf Club"
                name="golfclubs"
                value={user.golfClubId}
                onChange={changeGolfClubHandler}
                onSelect={changeGolfClubHandler}
              >
                {golfclubs.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.club}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSex">
            <FloatingLabel label="Kön" className="mb-3">
              <Form.Select
                id="sex"
                placeholder="Kön"
                name="sex"
                value={user.sex}
                onChange={changeSexHandler}
              >
                <option key="1">Man</option>
                <option key="2">Kvinna</option>
                <option key="3">Vill ej ange</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          <Button type="submit" variant="success">
            Register
          </Button>
        </Form>
        <div>
          Har du redan ett konto? <a onClick={closeHandler}>Login here</a>
        </div>
      </div>
    </div>
  );
}

SignupComponent.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignupComponent;
