// == Import
import { Box } from '@mui/material'
import DarkProduct from './DarkProduct';
import { useSelector } from 'react-redux';
// == Composant
function HomeTabsDark() {
  const data = useSelector(state => state.products)
  const dark = data.filter(darkproduct => darkproduct.type === 'Dark')
  console.log(data)
  return (
   
   <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
     {dark.map(product => (
      <DarkProduct 
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
export default HomeTabsDark;
