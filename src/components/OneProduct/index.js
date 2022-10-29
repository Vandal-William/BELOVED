// == Import
import { Box, Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// == Composant
function OneProduct() {
  const data = useSelector(state => state.products)
  const params = useParams()
  const products = data.find(product => { 
    if(product.id === parseInt(params.id)){
      return product
    }
  })
  

  return (

    <Box sx={{margin: '10rem'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        <Box 
          sx={{
            backgroundImage: `url(${products.image})`, 
            width: '30%', 
            height: '45rem', 
            backgroundSize: 'cover', 
            backgroundColor: 'black', 
            backgroundPosition: 'center',
          }}  
        />
        <Box sx={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant='h1' color='white' fontWeight='bold' sx={{textAlign: 'end'}}> {products.name} </Typography>
          <Typography variant='h2' color='white' fontWeight='bold' sx={{textAlign: 'end'}}> {products.author.name} </Typography>
          <Typography color='white' sx={{fontSize: '1.3rem', marginTop: '5rem', textAlign: 'justify'}}> {products.description} </Typography>

          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '2rem', marginTop: '5rem'}}>
          <Typography color='white' sx={{fontSize: '1.3em'}}> {products.price} ETH </Typography>
          <Button sx={{fontSize: '1.3em'}}>BUY</Button>
          </Box>

        </Box>

      </Box>
    </Box>

     

  );
}

// == Export
export default OneProduct;
