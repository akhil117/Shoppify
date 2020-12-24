import './event.css';
import React from 'react';
import SubmitButton from '../../components/Button/Submit';
import Modal from '../../components/Modal';


class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEvent: false,
      open: false
    };
    this.titleRef = React.createRef();
    this.priceRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.dateTimeRef = React.createRef();
  }

  isEventHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isEvent: !prevState.isEvent
      }
    })
  }

  saveEvent = () => {
    const title = this.titleRef.current.value;
    const priceRef = this.priceRef.current.value;
    const descriptionRef = this.descriptionRef.current.value;
    const dateTimeRef = this.dateTimeRef.current.value;

  }

  backdropToggle = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        open: !prevState.open
      }
    })
  }

  render() {
    const { isEvent } = this.state;

    return (
      <React.Fragment>
        <div className='events-controls'>
          <SubmitButton backgroundColor="#0A66C2" width='10%' padding='4px' submitHandler={this.isEventHandler} Title="Create Event" font='12px' />
        </div>
        <Modal
          submitHandler={this.isEventHandler}
          backdropToggle={isEvent}
          titleRef={this.titleRef}
          priceRef={this.priceRef}
          dateTimeRef={this.dateTimeRef}
          saveEvent={this.saveEvent}
          descriptionRef={this.descriptionRef}
        />
      </React.Fragment>
    )
  };
};

export default Event;