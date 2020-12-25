import './event.css';
import React from 'react';
import SubmitButton from '../../components/Button/Submit';
import Modal from '../../components/Modal';
import Alert from '../../components/Alert';
import Spinner from '../../components/Spinner'
import { connect } from 'react-redux';
import Items from '../../components/Events/Items';
import * as action from '../../store/actions'

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

  saveEvent = async () => {
    const titleRef = this.titleRef.current.value;
    const priceRef = +this.priceRef.current.value;
    const descriptionRef = this.descriptionRef.current.value;
    const dateTimeRef = new Date(this.dateTimeRef.current.value).toISOString();

    //closing the dialog box
    this.setState(prevState => {
      return {
        ...prevState,
        isEvent: !prevState.isEvent
      }
    });

    this.props.createEvent(titleRef, priceRef, dateTimeRef, descriptionRef);

    this.clearRefs()
  }

  clearRefs = () => {
    this.titleRef.current.value = "";
    this.priceRef.current.value= "";
    this.descriptionRef.current.value= "";
    this.dateTimeRef.current.value="";
  }

  backdropToggle = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        open: !prevState.open
      }
    })
  }

  componentDidMount = () => {
    this.props.toggleSpinner()
    this.props.fetchEvents();
  }

  render() {
    const { isEvent } = this.state;
    const { isEventAlert, closeEventAlert, isSpinnerDisplay, events } = this.props
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
        <Items events = {events} />
        { isSpinnerDisplay &&
          <div className="spinner_display">
            <Spinner />
          </div>
        }
        { isEventAlert &&
          <div className="alert__display">
            <Alert closeHandler={closeEventAlert} width={'50%'} title={"Successfully Created the Event"} />
          </div>
        }
      </React.Fragment>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    isEventAlert: state.event.isShowAlert,
    isSpinnerDisplay: state.event.isShowSpinner,
    events: state.event.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (title, price, datetime, descripiton) => dispatch(action.event(title, price, datetime, descripiton)),
    fetchEvents: () => dispatch(action.fetchEvents()),
    closeEventAlert: () => dispatch(action.closeEventAlert()),
    toggleSpinner: () => dispatch(action.isShowSpinner())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);