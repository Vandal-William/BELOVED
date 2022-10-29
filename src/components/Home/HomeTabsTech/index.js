// == Import
import { Box } from '@mui/material'
import TechProduct from './TechProduct';
import { useSelector } from 'react-redux';
// == Composant
function HomeTabsVintage() {
  const data = useSelector(state => state.products)
  const tech = data.filter(techproduct => techproduct.type === 'Modern-Tech')
  console.log(data)
  return (
   
   <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
     {tech.map(product => (
      <TechProduct 
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
export default HomeTabsVintage;
