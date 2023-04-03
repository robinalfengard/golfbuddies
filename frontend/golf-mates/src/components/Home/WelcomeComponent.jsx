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
const hello = "Greetings!";
const name = "Robin";

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
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKBbsIrEdbfo4DHs_DmJiPSx4BDThw-0isw&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Welcome {username}!</Card.Title>
            <Card.Text>
              Current Golf District:
              <br />
              {user.location}
              <br />
              <br />
              Current Handicap:
              <br />
              {user.handicap}
            </Card.Text>
            <Button variant="primary">
              <Link className="nav-link" to="/homepage">
                Find Players!
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
              <h2 className="HomeH2">Who will you play?</h2>
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
              <h2 className="HomeH2">Where will you play?</h2>
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
              <h2 className="HomeH2">What will you experience?</h2>
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
                      Bookings
                    </Link>
                  )}
                </Card.Title>
                <Card.Text>
                  Check your upcoming schedule of golf matches, and connect with
                  golfers from all over Sweden!
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
                      Match History
                    </Link>
                  )}
                </Card.Title>
                <Card.Text>
                  See your previous results and get contact information from
                  golfers you've previously been matched with.
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
                      Settings and Filter
                    </Link>
                  )}
                </Card.Title>
                <Card.Text>
                  Adjust your handicap or location to get in contact with
                  golfers in a certain area or in a specific skill range.
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
