// == Import
import {  Box, Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NFTS from './NFTS';
// == Composant
function Account() {
  const account = useSelector(state => state.wallet.account)
  const network = useSelector(state => state.wallet.networkId)


  const handleEdit = () => {

  }

  return (

      <Box sx={{marginTop: '15rem', display: 'flex', flexDirection: 'column'}}>
 
      <Box sx={{alignSelf: 'center', width: '85%', marginBottom: '5rem', display: 'flex', gap: '2rem'}}>
        <Button component={Link} to='/mint' sx={{ width: '10%', cursor: 'pointer'}}> Create NFT</Button>
        <Button onClick={handleEdit}  sx={{ width: '10%', cursor: 'pointer'}}> Edit profil</Button>
      </Box>

      <Box sx={{alignSelf: 'center', width: '85%'}}>
        <Typography sx={{color: 'white', fontSize: '1.5rem'}}> Account : {account}</Typography>
        <Typography sx={{color: 'white', fontSize: '1.3rem'}}> Network ID : {network}</Typography>
      </Box>
        <NFTS />
        
      </Box>
      
  

  );
}

// == Export
export default Account;
