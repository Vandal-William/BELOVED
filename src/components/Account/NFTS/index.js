// == Import
import {  Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import NFT from './NFT'
// == Composant
function NFTS() {
  const nfts = useSelector(state => state.nfts)
  return (
      <Box sx={{marginTop: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
       <Typography variant='h4' color='white' sx={{marginTop: '5rem', marginLeft: '5rem'}}>NFTS</Typography>
      {nfts.map(nft => (
       <NFT 
        key={nft.id}
        image= {nft.meta.content[0].url}
        blockchain= {nft.blockchain}
        name = {nft.meta.name}
       />
      ))}
      </Box>
      
  

  );
}

// == Export
export default NFTS;
