// == Import
import {  Box } from '@mui/material'
import { useSelector } from 'react-redux'
import NFT from './NFT'
// == Composant
function NFTS() {
  const nfts = useSelector(state => state.nfts)
  return (
      <Box sx={{marginTop: '10rem', display:'flex', justifyContent: 'center', gap: '2rem' }}>
      {nfts.map(nft => (
       <NFT 
        key={nft.id}
        image= {nft.meta.content[0].url}
       />

      ))}
      </Box>
      
  

  );
}

// == Export
export default NFTS;
