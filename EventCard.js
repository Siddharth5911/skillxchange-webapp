// EventCard.js
import React from 'react';

const EventCard = ({ event, onEventSelect }) => {
  return (
    <div className="event-card" onClick={() => onEventSelect(event)}>
      <img src={event.image} alt={event.name} />
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      <button>View Details</button>
    </div>
  );
};

export default EventCard;
