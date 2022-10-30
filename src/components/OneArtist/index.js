// == Import
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OneNft from '../OneNft';

// == Composant
function OneArtist() {
  const data = useSelector(state => state.products)
  const params = useParams()
  const products = data.find(product => { 
    if(product.id === parseInt(params.id)){
      return product
    }
  })
  const productsOwner = data.filter(product => product.id === parseInt(params.id))

  const Banner = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: 0,
      width: '100%',
      height: '20vh',
    },
  }));
  const AuthorPicture = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '30%',
      height: '20vh', 
      border: '0.2rem solid white',
      borderRadius: '2rem',
      position: 'absolute',
      top: '4rem',
      left: '1rem',
    },
  }));

  const AuthorName = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '2rem',
      marginLeft: '9rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '7rem',
    },
  }));

  const AuthorStory = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: '1rem',
      fontSize: '1rem',
      marginTop: '3rem'
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '7rem', 
      paddingBottom: '7rem', 
      paddingLeft: '20rem', 
      paddingRight: '20rem', 
      fontSize: '2rem', 
      textAlign: 'center'
    },
  }));

  const AuthorCollection = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: '2rem',
      fontSize: '2rem',
      marginTop: '3rem'
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '100px',
      fontSize: '4rem'
    },
  }));

  const CollectionContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 0,
      marginTop: '3rem',
      marginBottom: '1rem',
    },
  }));

  return (

    <Box >
     <Banner 
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

        <AuthorPicture 
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
            <AuthorName variant='h1' color='white' fontWeight='bold' sx={{marginLeft: '500px', marginTop: '1.5rem'}}> {products.author.name} </AuthorName>
            <AuthorStory variant='body1' color='white' sx={{paddingTop: '7rem', paddingBottom: '7rem', paddingLeft: '20rem', paddingRight: '20rem', fontSize: '2rem', textAlign: 'center'}}> {products.author.story} </AuthorStory>
            <AuthorCollection variant='h2' color='white' fontWeight='bold' sx={{marginLeft: '100px'}}> Collections </AuthorCollection>
            <CollectionContainer sx={{display: 'flex', justifyContent: 'start', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginTop: '6rem', marginBottom: '10rem', marginLeft: '9rem'}}>
              {productsOwner.map(product => (
                <OneNft 
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  tags={product.tags}
                  id={product.id}
                />
              ))}
            </CollectionContainer>
      </Box>

     

  );
}

// == Export
export default OneArtist;
