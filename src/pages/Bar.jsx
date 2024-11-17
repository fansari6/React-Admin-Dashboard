import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import BarChart from '../components/BarChart';

const Bar = () => {
  return (
    <Box margin="20px">
      <Header title="BAR CHART" subtile="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
