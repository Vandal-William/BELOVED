// == Import
import {  Box } from '@mui/material'
import { IpfsImage } from 'react-ipfs-image';
// == Composant
function NFT({ image}) {
  console.log(image)
  return (

        <Box>
          <IpfsImage hash={image.slice(21)} alt='nft' style={{width: '20rem', height:'20rem'}}/>

        </Box>

     
        
    
      
  

  );
}

// == Export
export default NFT;
