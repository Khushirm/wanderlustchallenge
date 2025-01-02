import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ActivityCard = ({ activity }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: '1rem auto' }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="body2">Time: {activity.timeEstimate}</Typography>
        <Typography variant="body2">Difficulty: {activity.difficulty}</Typography>
        <Button variant="contained" color="primary" size="small">
          Complete
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
