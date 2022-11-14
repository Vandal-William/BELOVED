// == Import
import {  Box, Card, CardActionArea, CardContent, Chip, Typography } from '@mui/material'
import { IpfsImage } from 'react-ipfs-image';
import { ArweaveImage } from 'react-arweave-image';
// == Composant
function NFT({image, blockchain, name}) {

  return (
    
    <Card sx={{ width: '20%' }}>
    <CardActionArea>
    <IpfsImage hash={image.slice(21)} alt='nft' style={{width: '100%', height:'20rem'}}/>
    <ArweaveImage hash={image.slice(20)} alt='nft' style={{width: '100%', height:'20rem'}} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Blockchain : {blockchain}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Name : {name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
      
        

     
        
    
      
  

  );
}

// == Export
export default NFT;
