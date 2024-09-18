import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

const DarkFeatureCard = ({ icon: Icon, title, subheader, description }) => (
    <Card sx={{ backgroundColor: 'black' }}>
    <CardHeader
      avatar={<Icon color="#fff" fontSize="large" />}
      title={
        <Typography color="white">{title}</Typography>
      }
      subheader={
        <Typography color="white">{subheader}</Typography>
      }
    />
    <CardContent>
      <Typography variant="body2" color="white">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default DarkFeatureCard;