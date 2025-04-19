// EventList.js
import React, { useState } from 'react';
import EventCard from './EventCard';

const eventsData = [
  {
    id: 1,
    name: 'Music Concert',
    description: 'A live music concert featuring popular artists.',
    date: '2025-06-10',
    location: 'City Arena',
    image: '/assets/event1.jpg'
  },
  {
    id: 2,
    name: 'Tech Conference',
    description: 'A conference on the latest in tech.',
    date: '2025-07-15',
    location: 'Convention Center',
    image: '/assets/event2.jpg'
  },
  // Add more events here
];

const EventList = ({ onEventSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = eventsData.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="event-list">
      <input 
        type="text" 
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div className="events">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onEventSelect={onEventSelect} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
