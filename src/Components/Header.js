import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => (
  <Box sx={{ my: 4, textAlign: 'center' }}>
    <Typography variant="h2" component="h1" gutterBottom>
      Design System Code Generator
    </Typography>
    <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
      Streamline your React development process with our powerful Design System Code Generator.
    </Typography>
    <Button variant="contained" size="large" sx={{ mt: 2 }}>
      Get Started
    </Button>
  </Box>
);

export default Header;