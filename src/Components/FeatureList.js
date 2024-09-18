import React from 'react';
import Grid from '@mui/material/Grid';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import BoltIcon from '@mui/icons-material/Bolt';
import FeatureCard from './FeatureCard';
import DarkFeatureCard from './DarkFeatureCard';

const features = [
  {
    icon: CodeIcon,
    title: "Effortless Code Generation",
    subheader: "Generate React components with ease",
    description: "Transform your design tokens into fully functional React components with just a few clicks."
  },
  {
    icon: PaletteIcon,
    title: "Customizable Themes",
    subheader: "Tailor your design system to your brand",
    description: "Easily customize colors, typography, and spacing to match your brand's unique identity."
  },
  {
    icon: BoltIcon,
    title: "Boost Productivity",
    subheader: "Accelerate your development workflow",
    description: "Save time and reduce errors by automating the creation of consistent UI components."
  }
];

const FeatureList = () => (
  <Grid container spacing={4} sx={{ mt: 4 }}>
    {features.map((feature, index) => (
      <Grid item xs={12} md={4} key={index}>
        {index % 2 === 0 ? (
          <FeatureCard {...feature} />
        ) : (
          <DarkFeatureCard {...feature} />
        )}
      </Grid>
    ))}
  </Grid>
);

export default FeatureList;