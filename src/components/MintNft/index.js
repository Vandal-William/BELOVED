// == Import
import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input'

// == Composant
function MintNft() {
  const dispatch = useDispatch()
  
  const handleChange = (e) => {

    dispatch({
      type: 'SHOW_IMAGE',
      image : URL.createObjectURL(e.target.files[0]),
      original_image: e.target.value
      
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'MINT_NFT',
      original_image: original_image,
      name: name,
      description: description

    })
  }
  
  const image = useSelector(state => state.mint.image)
  const original_image = useSelector(state => state.mint.original_image)
  const name = useSelector(state => state.mint.name)
  const description = useSelector(state => state.mint.description)
  
  
  return (

  <Container onSubmit={handleSubmit} component='form' sx={{bgcolor: 'lightgray', padding: '2rem', marginTop: '10rem', display: 'flex', flexDirection: 'column', marginBottom: '2rem'}}> 

    <Typography variant='h3' sx={{marginBottom: '2rem'}}>Create NFT</Typography>

    <Box sx={{display: 'flex', gap: '1rem'}}>
      <img src={image} alt='Nft' style={{width: '40%', height: '30rem'}}/>
      <input 
        type='file'
        accept='.png, .jpg, .jpeg'
        onChange={handleChange}
        style={{alignSelf: 'end', border: 'none'}}
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
  
    <Button type='submit' sx={{marginTop: '2rem', width: '20%', alignSelf: 'end'}}>Mint NFT</Button>

  
  </Container>    

  );
}

// == Export
export default MintNft;
