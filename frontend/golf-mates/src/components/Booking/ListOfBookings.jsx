import { useEffect } from "react";
import PlayAdService from "../../services/PlayAdService";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./ListOfBookings.css";
import BookingBox from "./BookingBox";

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

  const book = (c) => {
    confirmAlert({
      title: "Boka spelplats?",
      message: `Bana: ${c.golfClub.club}  
      Tid: ${JSON.stringify(c.playTime).slice(1, 17).replace("T", " ")}`,

      buttons: [
        {
          label: "Ja",
          onClick: () => bookPlaySlot(c.id),
        },
        {
          label: "Nej",
          onClick: () => "",
        },
      ],
    });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="font40 extraBold blueColor" onClick={getAllAds}>
          Lediga Bokningar
        </Card.Title>
        <button className="font30 extraBold greenColor" onClick={getAllAds}>
          Uppdatera listan
        </button>

        <br />
        {ads.map((c, i) => (
          <div className="row">
            <BookingBox
              id={`Bokningsnr: ${c.id}`}
              club={`Klubb: ${c.golfClub.club}`}
              time={`Tid: ${JSON.stringify(c.playTime)
                .slice(1, 17)
                .replace("T", " ")}`}
              car={`Samåkningsmöjlighet ${c.hasCar ? "Ja" : "Nej"}`}
              players={`Spelare 1: ${
                c.players[0] === undefined ? "Plats ledig" : c.players[0]
              }`}
              players2={`Spelare 2: ${
                c.players[1] === undefined ? "Plats ledig" : c.players[1]
              }`}
              players3={`Spelare 3: ${
                c.players[2] === undefined ? "Plats ledig" : c.players[2]
              }`}
              players4={`Spelare 4: ${
                c.players[3] === undefined ? "Plats ledig" : c.players[3]
              }`}
              action={() => book(c)}
            />
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default ListOfBookings;
