// == Import
import { AppBar, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import theme from '../../selectors/Theme'
// == Composant
function NavBar() {
  return (

   <AppBar>
      <Typography variant='h3' component={Link} to='/'> BELOVED </Typography>

      <Box sx={{display: 'flex', gap: '6rem'}}>
        <Typography variant='h6' fontWeight='bold' component={Link} to='/'> Product </Typography>
        <Typography variant='h6' fontWeight='bold' component={Link} to='/'> About us </Typography>
        <Typography variant='h6' fontWeight='bold' component={Link} to='/'> Contact us </Typography>
        <Typography variant='h6' fontWeight='bold' component={Link} to='/'> Sign in </Typography>
        <Typography variant='h6' fontWeight='bold' component={Link} to='/'> Sign up </Typography>
      </Box>
      
   </AppBar>

  );
}

// == Export
export default NavBar;
