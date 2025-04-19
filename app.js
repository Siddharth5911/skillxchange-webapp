// App.js
import React, { useState } from 'react';
import EventList from './EventList';
import EventModal from './EventModal';

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="app">
      <header>
        <h1>Welcome to EventX</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <EventList onEventSelect={handleEventSelect} />
      </main>

      {selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
      
      <footer>
        <p>© 2025 EventX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
