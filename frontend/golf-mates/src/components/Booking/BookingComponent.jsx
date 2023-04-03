import React from 'react';
import './BookingComponent.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { useState } from 'react';
import Button from "react-bootstrap/Button";

function BookingComponent () {




  const [booking, setBooking] = useState([])

  const [forminput, setForminput] = useState([{courseId: "", hasCar: "", locationId:"", teeTime: "", handicap:0}])

const handleInputChange = (event) => {
    const { name, value } = event.target;
   
    setForminput((prevState) => ({...prevState, 
      [name]: value
    }));
  }

  

const  handleSubmit = (event) => {
    event.preventDefault();
    console.log(forminput);
    setBooking(booking => [...booking, forminput]); 
    console.log(booking);
   
  }
 
   
    return (
      <>
      <div className="booking-container">
        <div className="golf-images-container">
          <img src="https://golf.com/wp-content/uploads/2019/08/golf-buddies.jpg" alt="Golf Course" />
          <img src="https://thumbs.dreamstime.com/b/friends-golf-course-portrait-young-group-walking-equipment-beautiful-game-sunny-day-162976211.jpg" alt="Golf Course" className="hidden" />
          <img src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2015/08/12/55cbb6774759c60c08235d75_Annoying-Golf-Partner-Wont-Pickup-Guy.jpg.rend.hgtvcom.616.411.suffix/1573513079698.jpeg" alt="Golf Course" className="hidden" />
        </div>
        <div className="booking-form-container">
          <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Find A Golf Mate</h2>
            <label htmlFor="locationId">Golf District:</label>
            <input type="text" name="locationId" id="locationId" value={forminput.locationId} onChange={handleInputChange} required />
            <label htmlFor="courseId">Golf Club:</label>
            <input type="text" name="courseId" id="courseId" value={forminput.courseId} onChange={handleInputChange} required />
            <label htmlFor="teeTime">Tee Time:</label>
            <input type="datetime-local" name="teeTime" id="teeTime" value={forminput.teeTime} onChange={handleInputChange} required />
            <label htmlFor="hasCar">Do you have a car?</label>
            <input type="text" name="hasCar" id="hasCar" value={forminput.hasCar} onChange={handleInputChange} required />
            <label htmlFor="handicap">Handicap:</label>
            <input type="number" name="handicap" id="handicap" value={forminput.handicap} onChange={handleInputChange} required />
            <button type="submit">Lägg upp spelförslag</button>
          </form>
        </div>
        </div>
        <br />
        <br />
        <div className='spel'>
         <h1> Spelförslag</h1>
      {   <Table striped bordered hover>
          <tr>
          <th>Distrikt</th>
          <th>Har Bil?</th>
          <th>Tid</th>
          <th>Golf Klubb</th>
          <th>Handikap</th>
         
          </tr>
          
     
    {booking.map((c) => (
        <tr>
        <td> {c.locationId}</td>
        <td>{c.hasCar}</td>
        <td>{c.teeTime}</td>
        <td>{c.courseId}</td>
        <td>{c.handicap}</td>
        <td></td>
       <Button>Boka</Button> 
       
       
           </tr>
          ))}
      </Table> }
      </div>
      
      </>
    );



  }


export default BookingComponent;