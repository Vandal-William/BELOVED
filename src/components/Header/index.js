// == Import
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import headerImage from '../../asset/header/headerImage.jpeg'

// == Composant
function Header() {

  const HeaderContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'md')]: {
      height: '35vh',
      gap: '3rem',
      justifyContent: 'center',
      paddingRight: 0,
      alignItems: 'center',  
    },
  }));

  const BrandTypo = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '2rem'
    },
  }));

  const BaseLineTypo = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '0.7rem'
    },
  }));

  const ImageHeader = styled('img')(({ theme }) => ({
    [theme.breakpoints.between('xs', 'md')]: {
      width: '30%'
    },
  }));


  return (
  
      <HeaderContainer 
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
          <BrandTypo variant='h1' color='white'> BELOVED </BrandTypo>
          <BaseLineTypo variant='h4' color='white' sx={{textAlign: 'center'}}> Love and Be Loved </BaseLineTypo>
        </Box>  
        <ImageHeader src={headerImage} alt='flowerTech' width='25%' />
        
      </HeaderContainer>


  );
}

// == Export
export default Header;
