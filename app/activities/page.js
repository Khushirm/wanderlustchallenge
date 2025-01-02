'use client';

import React, { useState } from 'react';
import { Button, TextField, MenuItem, Typography } from '@mui/material';
import axios from 'axios';

export default function GenerateActivityPage() {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState(null);

  const handleGenerate = async () => {
    if (!category || !difficulty) {
      alert('Please select a category and difficulty level.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/activities/generate', {
        category,
        difficulty,
      });
      setActivity(response.data);
    } catch (error) {
      console.error('Error generating activity:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4">Generate a Wander</Typography>

      <div style={{ margin: '1rem 0' }}>
        <TextField
          label="Category"
          select
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Culture">Culture</MenuItem>
          <MenuItem value="Adventure">Adventure</MenuItem>
        </TextField>

        <TextField
          label="Difficulty"
          select
          fullWidth
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          style={{ marginTop: '1rem' }}
        >
          <MenuItem value="Easy">Easy</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Hard">Hard</MenuItem>
        </TextField>
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Activity'}
      </Button>

      {activity && (
        <div style={{ marginTop: '2rem' }}>
          <Typography variant="h5">Generated Activity</Typography>
          <Typography>Title: {activity.title}</Typography>
          <Typography>Description: {activity.description}</Typography>
          <Typography>Time: {activity.timeEstimate}</Typography>
          <Typography>Difficulty: {activity.difficulty}</Typography>
        </div>
      )}
    </div>
  );
}
