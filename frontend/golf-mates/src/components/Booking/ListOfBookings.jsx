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

  return (
    <Card>
      <Card.Body>
        <Card.Title className="font40 extraBold blueColor" onClick={getAllAds}>Lediga Bokningar</Card.Title>
        <button className="font30 extraBold greenColor" onClick={getAllAds}>Uppdatera listan</button>

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

              players={`Spelare 1: ${c.players[0]}`}
              players2={`Spelare 2: ${c.players[1] == undefined ? "Ledig Plats" : c.players[1]}`}
              players3={`Spelare 3: ${c.players[2] == undefined ? "Ledig Plats" : c.players[2]}`}
              players4={`Spelare 4: ${c.players[3] == undefined ? "Ledig Plats" : c.players[3]}`}

              action={() => bookPlaySlot(c.id)}

            />
          </div>


        ))}
      </Card.Body>

    </Card>
  );
}





export default ListOfBookings;
