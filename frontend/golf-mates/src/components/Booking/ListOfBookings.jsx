import { useEffect } from "react";
import PlayAdService from "../../services/PlayAdService";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import { func } from "prop-types";
import { get } from "react-scroll/modules/mixins/scroller";
import "./ListOfBookings.css";

function ListOfBookings(props) {
  const [ads, setAds] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    getAllAds();
  }, []);

  async function getAllAds() {
    return await PlayAdService.getPlayAds().then((response) => {
      setAds(response.data);
    });
  }

  async function bookPlaySlot(playAdId) {
    PlayAdService.updatePlayAd(playAdId, username).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div className="container">
      <Card className="listofads">
        <Card.Body>
          <Card.Title onClick={getAllAds}>Lediga Bokningar</Card.Title>
          <Card.Text>
            <br />
            {ads.map((c, i) => (
              <Card>
                <Card.Body>
                  <Card.Title>Bokning #{i + 1}</Card.Title>
                  <Card.Text>
                    <span> Golfklubb : {c.golfClub.club}</span>
                    <span> Tillgängliga Platser : {c.emptySlots}</span>
                    <span>
                      {" "}
                      Tee Time :{" "}
                      {JSON.stringify(c.playTime)
                        .slice(1, 17)
                        .replace("T", " ")}
                    </span>
                    <span>
                      {" "}
                      Samåkningsmöjlighet : {c.hasCar ? "Ja" : "Nej"}
                    </span>
                    <br />
                    <h4>Spelare </h4>
                    {c.players.map((c, i) => (
                      <span>
                        Spelare {i + 1} : {c}
                      </span>
                    ))}
                    <Button onClick={() => bookPlaySlot(c.id)}>
                      Boka plats
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ListOfBookings;
