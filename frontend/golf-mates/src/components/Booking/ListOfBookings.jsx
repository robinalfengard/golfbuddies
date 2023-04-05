
import { useEffect } from "react";
import PlayAdService from "../../services/PlayAdService";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import { func } from "prop-types";
import { get } from "react-scroll/modules/mixins/scroller";
import BookingBox from "./BookingBox";


function ListOfBookings(props){
const [ads, setAds] = useState([]);


 useEffect(() => {
     getAllAds();
    }, []);

async  function getAllAds(){
    return await PlayAdService.getPlayAds().then((response) => {
        setAds(response.data);
        console.log(response.data);
        console.log(ads);
        console.log(ads[0].golfClub.club);
    });
}


return (
<Card>
<Card.Body>
<Card.Title className="font40 extraBold blueColor" onClick={getAllAds}>Lediga Bokningar</Card.Title>
 {/* <Card.Text> */}
  <br />
  {ads.map((c) => (
    // <Card>
    //<Card.Body> 
    //<Card.Text> 
    <div className="row">
    <BookingBox 
    id={`Bokningsnr: ${c.id}`}
    club={`Klubb: ${c.golfClub.club}`}
    handicap={`Handikapp: ${c.handicap}`}
    time={`Tid: ${c.playTime}`}
    car={`Samåkningsmöjlighet ${c.hasCar?"Ja":"Nej"}`}
    action={() => alert("clicked")}
    />
    
    </div>
    ))}
    {/* <span> ID : {c.id}</span>
    <span> Golfklubb : {c.golfClub.club}</span>
    <span> Handicap : {c.handicap}</span>
    <span> Tillgängliga Platser : {c.emptySlots}</span>
    <span> Tee Time : {c.playTime}</span>
    <span> Samåkningsmöjlighet : {c.hasCar?"Ja":"Nej"}</span> */}
    {/* </Card.Text> */}
    {/* </Card.Body> */}
    {/* </Card> */}
    


{/* </Card.Text> */}

</Card.Body>
</Card>
);
}
export default ListOfBookings;