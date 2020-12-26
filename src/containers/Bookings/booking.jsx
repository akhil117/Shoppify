import './booking.css';
import React from 'react';
import * as action from '../../store/actions/index'
import { connect } from 'react-redux'
import Items from '../../components/Events/Items';


class Booking extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    console.log("Bookings", "this.componentDidMount")
    this.props.fetchBookings();
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Bookings", "this.componentDidUpdate")
    console.log("Previous Props", prevProps.bookings);
    console.log("New Props", this.props.bookings);
    const prev = prevProps.bookings.length;
    console.log("Prev",prev);
    console.log("New",this.props.bookings.length)
    if (prevProps.bookings.length !== this.props.bookings.length)
       this.props.fetchBookings();
  }

  render() {
    return (
      <Items events={this.props.bookings} isBooking={true} />
    )
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    bookings: state.booking.bookings
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookings: () => dispatch(action.fetchBooking())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);