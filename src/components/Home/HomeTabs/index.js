import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';

export default function HomeTabs() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch({
      type: 'SHOW_NEW_SECTION',
      tabs: newValue
    })
    console.log(newValue)
  };

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', padding: '1rem', marginBottom: '1rem'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        
      >
        <Tab sx={{color: 'rgb(234, 234, 234, 0.3)', border: '0.1px solid rgb(234, 234, 234, 0.4)', borderRadius: '10%', marginRight: '1rem'}} label="All" />
        <Tab sx={{color: 'rgb(234, 234, 234, 0.3)', border: '0.1px solid rgb(234, 234, 234, 0.4)', borderRadius: '10%', marginRight: '1rem'}} label="NEON" />
        <Tab sx={{color: 'rgb(234, 234, 234, 0.3)', border: '0.1px solid rgb(234, 234, 234, 0.4)', borderRadius: '10%', marginRight: '1rem'}} label="DARK" />
        <Tab sx={{color: 'rgb(234, 234, 234, 0.3)', border: '0.1px solid rgb(234, 234, 234, 0.4)', borderRadius: '10%', marginRight: '1rem'}} label="MODERN-TECH" />
      </Tabs>
    </Box>
  );
}