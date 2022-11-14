// == Import
import {  Box, Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import NFTS from './NFTS';
// == Composant
function Account() {
  const account = useSelector(state => state.account)
  const network = useSelector(state => state.networkId)

  const handleClick = () => {
    console.log('coucou')
  }
  return (

      <Box sx={{marginTop: '15rem', display: 'flex', flexDirection: 'column'}}>
      <Box sx={{alignSelf: 'center', width: '85%'}}>
        <Typography sx={{color: 'white', fontSize: '1.5rem'}}> Account : {account}</Typography>
        <Typography sx={{color: 'white', fontSize: '1.3rem'}}> Network ID : {network}</Typography>
      </Box>
        <NFTS />
        <Button onClick={handleClick}  sx={{marginTop: '2rem', width: '10%', marginLeft: '5rem', cursor: 'pointer'}}> Create NFT</Button>
      </Box>
      
  

  );
}

// == Export
export default Account;
