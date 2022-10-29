// == Import
import { Box } from '@mui/material'
import NeonProduct from './NeonProduct';
import { useSelector } from 'react-redux';
// == Composant
function HomeTabsNeon() {
  const data = useSelector(state => state.products)
  const neon = data.filter(neonproduct => neonproduct.type === 'Neon')
  console.log(data)
  return (
   
   <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
     {neon.map(product => (
      <NeonProduct 
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        tags={product.tags}
        id={product.id}

      />
     ))}
   </Box>

  );
}

// == Export
export default HomeTabsNeon;
