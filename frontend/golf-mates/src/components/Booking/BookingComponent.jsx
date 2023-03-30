import React from 'react';
import './BookingComponent.css';

class BookingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: '',
      hasCar: '',
      teeTime: '',
      locationId: '',
      handicap: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Skicka data här via api eller liknande?
    console.log(this.state);
  }

  render() {
    return (
      <div className="booking-container">
        <div className="golf-images-container">
          <img src="https://golf.com/wp-content/uploads/2019/08/golf-buddies.jpg" alt="Golf Course" />
          <img src="https://thumbs.dreamstime.com/b/friends-golf-course-portrait-young-group-walking-equipment-beautiful-game-sunny-day-162976211.jpg" alt="Golf Course" className="hidden" />
          <img src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2015/08/12/55cbb6774759c60c08235d75_Annoying-Golf-Partner-Wont-Pickup-Guy.jpg.rend.hgtvcom.616.411.suffix/1573513079698.jpeg" alt="Golf Course" className="hidden" />
        </div>
        <div className="booking-form-container">
          <form className="booking-form" onSubmit={this.handleSubmit}>
            <h2>Find A Golf Mate</h2>
            <label htmlFor="locationId">Golf District:</label>
            <input type="text" name="locationId" id="locationId" value={this.state.locationId} onChange={this.handleInputChange} required />
            <label htmlFor="courseId">Golf Club:</label>
            <input type="text" name="courseId" id="courseId" value={this.state.courseId} onChange={this.handleInputChange} required />
            <label htmlFor="teeTime">Tee Time:</label>
            <input type="datetime-local" name="teeTime" id="teeTime" value={this.state.teeTime} onChange={this.handleInputChange} required />
            <label htmlFor="hasCar">Do you have a car?</label>
            <input type="text" name="hasCar" id="hasCar" value={this.state.hasCar} onChange={this.handleInputChange} required />
            <label htmlFor="handicap">Handicap:</label>
            <input type="number" name="handicap" id="handicap" value={this.state.handicap} onChange={this.handleInputChange} required />
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingComponent;