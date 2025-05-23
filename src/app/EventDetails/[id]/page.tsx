import React from 'react';

interface PageProps {
  params: {
    id: number;
  };
}

const page = ({params}: PageProps) => {
    
    console.log(params.id);
    return (
        <div>
            <h3>Event Details</h3>
        </div>
    );
};

export default page;