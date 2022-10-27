// == Import
import { AppBar, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import theme from '../../../selectors/Theme'
import Product from './Product';
import image from '../../../asset/products/product01.jpeg'
import { useSelector } from 'react-redux';
// == Composant
function HomeTabsAll() {
  const data = useSelector(state => state.products)
  console.log(data)
  return (
   
   <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
     {data.map(product => (
      <Product 
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        tag={product.tags.name}

      />
     ))}
   </Box>

  );
}

// == Export
export default HomeTabsAll;
