// == Import
import { AppBar, Box, Card, Chip, Typography } from '@mui/material'
import { lightBlue} from '@mui/material/colors';
import {green} from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import theme from '../../../../selectors/Theme'
import { bgcolor, padding } from '@mui/system';
import { useSelector } from 'react-redux';

// == Composant
function NeonProduct({image, name, price, tags, id}) {
  const data = useSelector(state => state.product)
  return (
   
     
        
  <Box component={Link} to={`/product/${id}`} sx={{width: '20%', height: '30rem', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '30rem'}}>
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
  
      {tags.map(tag =>(
    
          <Chip 
            key={tag.id}
            label={tag.name}
            sx={{width: '40%', padding : '1rem', margin: '1rem',  backgroundColor: 'lightBlue'}}
           
          />
      ))}
    
      {/* <FavoriteBorderIcon sx={{bgcolor: 'lightblue', borderRadius: '50%', padding: '0.2rem', marginRight: '1rem', fontSize: '2rem'}}/> */}
    </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', bgcolor: 'rgb(0,0,0, 0.7)', padding: '1rem'}}>
        <Box>
          <Typography sx={{fontWeight: 'bold', fontSize: '1.3rem', color: 'white', textShadow: '0.1rem 0.1rem 0.2rem black'}}> {name} </Typography>
          <Typography sx={{fontSize: '1rem', color: '#eaeaea', textShadow: '0.1rem 0.1rem 0.2rem black'}}> NFT ART </Typography>
        </Box>
        <Typography sx={{fontWeight: 'bold', fontSize: '1rem', color: '#eaeaea', textShadow: '0.1rem 0.1rem 0.2rem black', alignSelf: 'end'}}> {price} ETH </Typography>
      </Box>
   
    </Box>
  </Box>
      
   

  );
}

// == Export
export default NeonProduct;
