// == Import
import { Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import Input from '../Input'

// == Composant
function MintNft() {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch({
      type : 'IMAGE_NFT_VALUE',
      mintNftImage : e.target.value

    })
  }
  
  return (
  <Container component='form' sx={{bgcolor: 'lightgray', padding: '2rem', marginTop: '10rem'}}> 
    <Input 
      type='file'
      accept='.png, .jpg, .jpeg'
      onChange={handleChange}
    />
   

  
  </Container>    

  );
}

// == Export
export default MintNft;
