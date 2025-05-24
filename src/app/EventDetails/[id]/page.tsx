import React from 'react';
import events from "../../../../public/event.json";

interface PageProps {
  params: {
    id: number;
  };
}

const page = ({params}: PageProps) => {
    
  console.log(events);
    const event = events.find(({event}) => event.id === params.id);
    console.log(event);


    return (
        <div>
            <h3>Event Details</h3>
        </div>
    );
};

export default page;