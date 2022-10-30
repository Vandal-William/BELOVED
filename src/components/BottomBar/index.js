import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

function BottomBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{backgroundColor: 'black'}}
      > 
        <BottomNavigationAction component={Link} to='/'  icon={<HomeIcon sx={{color: 'white'}}/>} />
      </BottomNavigation>
    </Box>
  );
}

export default BottomBar;