import React from 'react';
import Item from './item'
import './items.css'
const Items = (props) => {
  const events = [...props.events]
  const items = props.isBooking?
  <div className="events__display">
      {events.map((event, index) => {
        return (
          <Item key={index} title ={event.event.title} description={event.event.description} price={event.event.price} date={event.updatedAt}  eventId={event._id}  isBooking ={true}/>
        );
      })}
    </div> :

    <div className="events__display">
      {events.map((event, index) => {
        return (
          <Item key={index} title ={event.title} description={event.description} price={event.price} date={event.date} createdEventUserId ={event.creator._id} eventId={event._id} isBooking ={false} />
        );
      })}
    </div>

    return items

};
export default Items;