import { useParams, Link, json } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../security/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { updateUserInfoApi } from "../api/AppApiService";
import Image from "react-bootstrap/Image";


function WelcomeComponent(props) {
  const authContext = useAuth();
  const { username } = useParams();
  const isAuthenticated = authContext.isAuthenticated;
  const [message, setMessage] = useState(null);

  const [Id, setId] = useState(0);
  const [Username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [handicap, setHandicap] = useState(0.0);

  const user = {
    Id: Id,
    Username: Username,
    location: location,
    handicap: handicap,
  };

  function successfulResponse(response) {
    setId(response.data.id);

    setUsername(response.data.username);

    setLocation(response.data.location);

    setHandicap(response.data.handicap);
  }

  useEffect(() => {
    getUser();
  }, username);

  function logout() {
    authContext.logout();
  }

  // const [user1, setUser] = useState({});
  function getUser() {
    updateUserInfoApi(username)
      .then((response) => successfulResponse(response))
      .catch((error) => console.log("error"))
      .finally(() => console.log("cleanup"));
    console.log(user);
  }

  /*  
  function handleHandicapChange(event) {
    setHandicap(event.target.value);
  } */
  /* 
  const [location, setLocation] = useState();
  function handleLocationChange(event) {
    setLocation(event.target.value);
  } */

  return (
    <div className="welcomepage">
      <div className="WelcomeComponent">
        {/* - <Link to="/">Go here</Link> */}
        <Card style={{ width: "18rem" }}>

          <Card.Body>
            <Card.Title>Welcome {username}!</Card.Title>
            <Card.Text>
              Nuvarande Distrikt:
              <br />
              {user.location}
              <br />
              <br />
              Nuvarande Handicap:
              <br />
              {user.handicap}
            </Card.Text>
            <Button variant="primary">
              <Link className="nav-link" to="/homepage">
                Hitta spelare!
              </Link>
            </Button>
          </Card.Body>
        </Card>

        <div className="text-info">{message}</div>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
              <h2 className="HomeH2">Träffa nya vänner!</h2>
            </Carousel.Caption>
            <img
              id="carPic"
              className="d-block w-100"
              src="https://wallpapercave.com/dwp2x/e8YwQt9.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="carPic"
              className="d-block w-100"
              src="https://wallpapercave.com/dwp2x/fSO4NjG.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              {" "}
              <h2 className="HomeH2">Upplev nya platser!</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="carPic"
              className="d-block w-100"
              src="https://wallpapercave.com/dwp2x/m6fp4Dr.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              {" "}
              <h2 className="HomeH2">Spela mer golf!</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <div>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1064738096/photo/golfer-friends.jpg?s=612x612&w=0&k=20&c=e8XrrsRJN5ZJ0sIKfji7gKryCwh0S7VjVgE2WGPqmO0="
                className="card-img"
              />
              <Card.Body>
                <Card.Title>
                  {isAuthenticated && (
                    <Link className="nav-link" to="/logout" onClick={logout}>
                      Bokningar
                    </Link>
                  )}
                </Card.Title>
                <Card.Text>
                  Se dina planerade golfmatcher och få kontakt med golfspelare över hela Sverige!
                
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/96451938/photo/golf-scorecard-with-birdie.jpg?s=612x612&w=0&k=20&c=5lJiGBKNkWm5zKsY5aJjCr4v--3EcF2BEQF1lFMkJqE="
                className="card-img"
              />
              <Card.Body>
                <Card.Title>
                  {isAuthenticated && (
                    <Link className="nav-link" to="/logout" onClick={logout}>
                      Match-Historik
                    </Link>
                  )}
                </Card.Title>
                <Card.Text>
                  Se tidigare resultat och ta kontakt med golfare som du tidigare spelat med.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                className="card-img"
                src="https://st3.depositphotos.com/1004061/18217/i/600/depositphotos_182178420-stock-photo-golf-equipment-bag-standing-course.jpg"
              />
              <Card.Body>
                <Card.Title>
                  {isAuthenticated && (
                    <Link className="nav-link" to="/logout" onClick={logout}>
                      Inställningar
                    </Link>
                  )}
                </Card.Title>
                <Card.Text>
                  Justera ditt handicap och din plats för att kommma i kontakt med golfare från ett visst område eller med en viss skicklighet.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

export default WelcomeComponent;
