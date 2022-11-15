// == Import
import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input'

// == Composant
function MintNft() {

  const image = useSelector(state => state.mint.image)
  console.log(image)
  
  return (
  <Container component='form' sx={{bgcolor: 'lightgray', padding: '2rem', marginTop: '10rem', display: 'flex', flexDirection: 'column'}}> 

    <Typography variant='h3' sx={{marginBottom: '2rem'}}>Create NFT</Typography>

    <Box sx={{display: 'flex', gap: '1rem'}}>
      <img src={image} alt='Nft' style={{border: '0.1rem solid black', width: '100%', height: '20rem'}}/>
      <Input 
        type='file'
        accept='.png, .jpg, .jpeg'
        name='image'
        sx={{alignSelf: 'end', border: 'none'}}
      />
    </Box>

    <Box sx={{marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>

      <Input 
        name='name'
        label='name'
        sx={{width: '50%'}}
      />

       <Input 
        name='description'
        label='description'
        rows='50'
      />

    </Box>
   
    <Button sx={{marginTop: '2rem', width: '20%', alignSelf: 'end'}}>Mint NFT</Button>

  
  </Container>    

  );
}

// == Export
export default MintNft;
