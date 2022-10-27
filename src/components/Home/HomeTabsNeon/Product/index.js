// == Import
import { AppBar, Box, Card, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import theme from '../../../../selectors/Theme'

// == Composant
function Product({image, name, price, tag}) {
  return (
   
    
        <Box component='img' src={image} alt={name} sx={{width: '20%', height: '30rem'}} />
      
   

  );
}

// == Export
export default Product;
