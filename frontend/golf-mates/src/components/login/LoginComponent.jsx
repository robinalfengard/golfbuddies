import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
import { useAuth } from "../security/AuthContext";

function LoginComponent(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const authContext = useAuth();
  const navigate = useNavigate();

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  async function handleSubmit() {
    if (await authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setShowErrorMessage(true);
    }
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="Login">
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
          <Form>
            <Form.Group className="mb-3">
              {showErrorMessage && (
                <div className="errorMessage">
                  Authentication Failed. Please check your credentials.
                </div>
              )}
              <FloatingLabel controlId="floatingUsername" label="Username">
                <Form.Control
                  required
                  size="sm"
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <FloatingLabel label="Password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </FloatingLabel>
            </Form.Group>

            <Button type="button" name="login" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
          <div>
            Har du inget konto? <a onClick={closeHandler}>Skapa konto här</a>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginComponent.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginComponent;
