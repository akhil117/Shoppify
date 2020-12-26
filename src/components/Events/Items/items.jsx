import React from 'react';
import Item from './item'
import './items.css'
const Items = (props) => {
  const events = [...props.events]
  return (
    <div className="events__display">
      {events.map((event, index) => {
        return (
          <Item key={index} title ={event.title} description={event.description} price={event.price} date={event.date} createdEventUserId ={event.creator._id} eventId={event._id} />
        );
      })}
    </div>
  );
};
export default Items;