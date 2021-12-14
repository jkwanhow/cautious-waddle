import {React, useState, useEffect} from 'react';
import './Home.css';

import EventBubble from '../components/EventBubble'
import data from '../testdata/home_events.json'

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(data);
  });

  
  return (
    <div className="base">
      <div className="grid-container">
        {events.map((id) => 
        <EventBubble name={id.eventName} date={id.dueDate}/>)
        }
      </div>
    </div>
  );
}

export default Home;
