import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
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

  const TabsContainer = styled(Tabs)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'md')]: {
      padding: 0,
    },
  }));

  const TabsItem = styled(Tab)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'md')]: {
      padding: '0.3rem',
      marginTop: '2rem',
      marginRight: '0.5rem',
      fontSize: '0.8rem',
      height: '1%',
      width: 'auto'
    },
  }));

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', padding: '0.5rem', marginBottom: '1rem'}}>
      <TabsContainer
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        
      >
        <TabsItem sx={{color: 'rgb(234, 234, 234, 0.3)', border: '0.1px solid rgb(234, 234, 234, 0.4)', borderRadius: '10%', marginRight: '1rem'}} label="All" />
        <TabsItem sx={{color: 'rgb(234, 234, 234, 0.3)', border: '0.1px solid rgb(234, 234, 234, 0.4)', borderRadius: '10%', marginRight: '1rem'}} label="NEON" />
        <TabsItem sx={{color: 'rgb(234, 234, 234, 0.3)', border: '0.1px solid rgb(234, 234, 234, 0.4)', borderRadius: '10%', marginRight: '1rem'}} label="DARK" />
        <TabsItem sx={{color: 'rgb(234, 234, 234, 0.3)', border: '0.1px solid rgb(234, 234, 234, 0.4)', borderRadius: '10%', marginRight: '1rem'}} label="MODERN-TECH" />
      </TabsContainer>
    </Box>
  );
}