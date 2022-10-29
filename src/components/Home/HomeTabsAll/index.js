// == Import
import {Box} from '@mui/material'
import AllProduct from './AllProduct';
import { useSelector } from 'react-redux';

// == Composant
function HomeTabsAll() {
  const data = useSelector(state => state.products)
  console.log(data)
  return (
   
   <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginTop: '5rem', marginBottom: '5rem'}}>
     {data.map(product => (
      <AllProduct 
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        tags={product.tags}
        id={product.author.id}

      />
     ))}
   </Box>

  );
}

// == Export
export default HomeTabsAll;
