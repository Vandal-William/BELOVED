// == Import
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// == Composant
function OneProduct() {
  const data = useSelector(state => state.wallet.products)
  const params = useParams()
  const products = data.find(product => { 
    if(product.id === parseInt(params.id)){
      return product
    }
  })

  const ProductContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      margin: 0,
      padding: '1rem'
    },
 
  }));

  const ProductContent = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      marginTop: '2rem',
    },
 
  }));

  const ProductImage = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '90%',
      height: '25rem'
    },
 
  }));

  const ProductInfoContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%'
    },
 
  }));

  const ProductName = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '6rem'
    },
 
  }));
  const ProductAuthorName = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: '1.5rem',
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem'
    },
 
  }));
  const ProductPriceContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      justifyContent: 'space-between', 
      marginBottom: '1.5rem'
    },
 
  }));

  return (

    <ProductContainer sx={{margin: '10rem'}}>
      <ProductContent sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        <ProductImage 
          sx={{
            backgroundImage: `url(${products.image})`, 
            width: '30%', 
            height: '45rem', 
            backgroundSize: 'cover', 
            backgroundColor: 'black', 
            backgroundPosition: 'center',
          }}  
        />
        <ProductInfoContainer sx={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <ProductName variant='h1' color='white' fontWeight='bold' sx={{textAlign: 'end'}}> {products.name} </ProductName>
          <ProductAuthorName variant='h2' color='white' fontWeight='bold' sx={{textAlign: 'end'}}> {products.author.name} </ProductAuthorName>
          <Typography color='white' sx={{fontSize: '1.3rem', marginTop: '5rem', textAlign: 'justify'}}> {products.description} </Typography>

          <ProductPriceContainer sx={{display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '2rem', marginTop: '5rem'}}>
          <Typography color='white' sx={{fontSize: '1.3em'}}> {products.price} ETH </Typography>
          <Button sx={{fontSize: '1.3em'}}>BUY</Button>
          </ProductPriceContainer>

        </ProductInfoContainer>

      </ProductContent>
    </ProductContainer>

     

  );
}

// == Export
export default OneProduct;
