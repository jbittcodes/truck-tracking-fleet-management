import React, { useState } from 'react';

const TruckTracking = () => {
    const [location, setLocation] = useState("Not available");

    const fetchLocation = async () => {
        // Simulated API call
        setLocation("Latitude: 40.7128, Longitude: -74.0060");
    };

    return (
        <div className="tracking-container">
            <h1>Truck Tracking</h1>
            <button onClick={fetchLocation}>Get Location</button>
            <p>Current Location: {location}</p>
        </div>
    );
};

export default TruckTracking;