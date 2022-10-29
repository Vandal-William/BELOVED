// == Import
import { Box, Typography } from '@mui/material'
import headerImage from '../../asset/header/headerImage.jpeg'
// == Composant
function Header() {
  return (
    <Box 
    sx={{
      width: '100%', 
      height: '100vh', 
      padding: '1rem', 
      paddingRight: '20%', 
      display: 'flex', 
      justifyContent: 'end', 
      alignItems: 'center', 
      backgroundColor: 'black',
      gap: '10rem'
      }} 
      >
      <Box>
        <Typography variant='h1' color='white'> BELOVED </Typography>
        <Typography variant='h4' color='white' sx={{textAlign: 'center'}}> Love and Be Loved </Typography>
      </Box>  
      <img src={headerImage} alt='flowerTech' width='25%' />
      

    </Box>

  );
}

// == Export
export default Header;
