'use client';

import React, { useState, useEffect } from 'react';
// import ActivityCard from '../../components/ActivityCard';
import axios from 'axios';

export default function QuestsPage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/activities');
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h2>Available Quests</h2>
      {activities.length > 0 ? (
        activities.map((activity) => (
          <activity key={activity._id} activity={activity} />
        ))
      ) : (
        <p>No activities available. Please generate some!</p>
      )}
    </div>
  );
}
