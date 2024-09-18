import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

const FeatureCard = ({ icon: Icon, title, subheader, description }) => (
  <Card>
    <CardHeader
      avatar={<Icon color="primary" fontSize="large" />}
      title={title}
      subheader={subheader}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default FeatureCard;