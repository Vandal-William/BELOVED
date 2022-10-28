// == Import
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserNfts from '../UserNfts';

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

    <Box >
     <Box 
        sx={{
          backgroundImage: `url(${products.author.banner})`, 
          width: '100%', 
          height: '50vh', 
          backgroundSize: 'cover', 
          backgroundColor: 'black', 
          backgroundPosition: 'center',
          marginTop: '7rem'

          }}  

          />

        <Box 
          sx={{
            backgroundImage: `url(${products.author.photo})`, 
            width: '20%', 
            height: '40vh', 
            backgroundSize: 'cover', 
            backgroundColor: 'black', 
            backgroundPosition: 'center',
            position: 'absolute',
            top: '350px',
            left: '100px',
            borderRadius: '5rem',
            border: '1rem solid white' 
            }} 
            />
            <Typography variant='h1' color='white' fontWeight='bold' sx={{marginLeft: '500px', marginTop: '1.5rem'}}> {products.author.name} </Typography>
            <Typography variant='body1' color='white' sx={{paddingTop: '7rem', paddingBottom: '7rem', paddingLeft: '20rem', paddingRight: '20rem', fontSize: '2rem', textAlign: 'center'}}> {products.author.story} </Typography>
            <Typography variant='h2' color='white' fontWeight='bold' sx={{marginLeft: '100px'}}> Collections </Typography>
            <UserNfts/>
      </Box>

     

  );
}

// == Export
export default OneProduct;
