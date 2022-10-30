// == Import
import { Box, Chip, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// == Composant
function OneNft({image, name, price, tags, id}) {

  const ProductCards = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: 0,
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      width: '35%',
    },
  }));

  return (       
      
      <ProductCards component={Link}  to={`/product/${id}`} sx={{width: '20%', height: '30rem', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '30rem'}}>

        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      
          {tags.map(tag =>(
        
              <Chip 
                key={tag.id}
                label={tag.name}
                sx={{width: '40%', padding : '1rem', margin: '1rem',  backgroundColor: 'lightBlue'}}
              
              />
          ))}
        </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', bgcolor: 'rgb(0,0,0, 0.7)', padding: '1rem'}}>
            <Box>
              <Typography sx={{fontWeight: 'bold', fontSize: '1.3rem', color: 'white', textShadow: '0.1rem 0.1rem 0.2rem black'}}> {name} </Typography>
              <Typography sx={{fontSize: '1rem', color: '#eaeaea', textShadow: '0.1rem 0.1rem 0.2rem black'}}> NFT ART </Typography>
            </Box>
            <Typography sx={{fontWeight: 'bold', fontSize: '1rem', color: '#eaeaea', textShadow: '0.1rem 0.1rem 0.2rem black', alignSelf: 'end'}}> {price} ETH </Typography>
          </Box>
      
        </Box>
      </ProductCards>
           

  );
}

// == Export
export default OneNft;
