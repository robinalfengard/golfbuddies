import React from "react";
import "./BookingComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import LocationService from "../../services/LocationService";
import GolfClubService from "../../services/GolfClubService";
import PlayAdService from "../../services/PlayAdService";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Footer from "./Footer.jsx";
import { useParams } from "react-router-dom";

function BookingComponent(props) {
  const [validated, setValidated] = useState(false);
  const [booking, setBooking] = useState([]);
  const [districts, setDistricts] = useState([{}]);
  const [golfclubs, setGolfclubs] = useState([]);
  const { username } = useParams();
  const [forminput, setForminput] = useState({ username: username });

  useEffect(() => {
    getDistrictList();
  }, []);

  useEffect(() => {
    getGolfClubs(forminput.locationId);
  }, [forminput.locationId]);

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
      forminput.locationId = parseInt(forminput.locationId);
      forminput.handicap = parseFloat(forminput.handicap);
      forminput.golfclub = parseFloat(forminput.golfclub);
      console.log(forminput.username);
      PlayAdService.registerPlayAd(forminput);

      console.log(forminput);
    }
    event.preventDefault();
    setValidated(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "hasCar") {
      setForminput((prevState) => ({
        ...prevState,
        hasCar: !forminput.hasCar,
      }));
    } else {
      setForminput((prevState) => ({ ...prevState, [name]: value }));
    }

    console.log(forminput);
  };

  return (
    <>
      <div className="booking-container">
        <div className="golf-images-container">
          <img
            src="https://golf.com/wp-content/uploads/2019/08/golf-buddies.jpg"
            alt="Golf Course"
          />
          <img
            src="https://thumbs.dreamstime.com/b/friends-golf-course-portrait-young-group-walking-equipment-beautiful-game-sunny-day-162976211.jpg"
            alt="Golf Course"
            className="hidden"
          />
          <img
            src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2015/08/12/55cbb6774759c60c08235d75_Annoying-Golf-Partner-Wont-Pickup-Guy.jpg.rend.hgtvcom.616.411.suffix/1573513079698.jpeg"
            alt="Golf Course"
            className="hidden"
          />
        </div>
        <div className="booking-form-container">
          <Form
            noValidate
            validated={validated}
            className="booking-form"
            onSubmit={handleSubmit}
          >
            <h2>Skapa en spelannons!</h2>
            <Form.Group className="mb-3" controlId="formLocation">
              <FloatingLabel label="Golf district" className="mb-3">
                <Form.Select
                  id="golfdistrict"
                  placeholder="Golf District"
                  name="locationId"
                  value={forminput.locationId}
                  onChange={handleInputChange}
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
                  id="golfclub"
                  placeholder="Golf Club"
                  name="golfclub"
                  value={forminput.courseId}
                  onChange={handleInputChange}
                >
                  {golfclubs.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.club}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>

            <label>Tid:</label>
            <input
              type="datetime-local"
              name="teeTime"
              id="teeTime"
              value={forminput.teeTime}
              onChange={handleInputChange}
              required
            />

            <Form.Group className="mb-3" controlId="formClub">
              <label>Har du bil?</label>
              <Form.Check
                type="checkbox"
                name="hasCar"
                id="hasCar"
                value={forminput.hasCar}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formClub">
              <label className="mb-3">Handikapp: </label>
              <input
                min="0"
                max="36"
                type="number"
                name="handicap"
                id="handicap"
                value={forminput.handicap}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <button className="skapaSpelannons row flexcenter" type="submit">Lägg upp spelförslag</button>
          </Form>
        </div>
       
      </div>
      <Footer />
    </>
  );
}

export default BookingComponent;
