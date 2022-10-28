// == Import
import { Box } from '@mui/material'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OneNft from './OneNft';

// == Composant
function UserNfts() {
  const params = useParams()
  const data = useSelector(state => state.products)
  const productsOwner = data.filter(product => product.id === parseInt(params.id))
  console.log(data)
  return (
   
   <Box sx={{display: 'flex', justifyContent: 'start', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginTop: '6rem', marginBottom: '10rem', marginLeft: '9rem'}}>
     {productsOwner.map(product => (
      <OneNft 
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        tags={product.tags}

      />
     ))}
   </Box>

  );
}

// == Export
export default UserNfts;
