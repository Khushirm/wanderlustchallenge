'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/users/profile?username=test_user');
        // const mockUserData = {
        //   username: 'test_user',
        //   points: 100,
        //   completedActivities: ['activity1', 'activity2'],
        //   achievements: ['achievement1', 'achievement2'],
        // };
        // setUser(mockUserData); // Set the mock data in state
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h2>User Profile</h2>
          <p>Username: {user.username}</p>
          <p>Points: {user.points}</p>
          <p>Completed Activities: {user.completedActivities.length}</p>
          <p>Achievements: {user.achievements.join(', ')}</p>
        </>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
}
