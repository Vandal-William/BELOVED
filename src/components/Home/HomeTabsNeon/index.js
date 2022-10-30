// == Import
import { Box } from '@mui/material'
import { styled } from '@mui/system';
import NeonProduct from './NeonProduct';
import { useSelector } from 'react-redux';
// == Composant
function HomeTabsNeon() {
  const data = useSelector(state => state.products)
  const neon = data.filter(neonproduct => neonproduct.type === 'Neon')

  const ProductContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '3rem',
      flexWrap: 'wrap'
    },
  }));
 
  return (
   
   <ProductContainer sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
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
   </ProductContainer>

  );
}

// == Export
export default HomeTabsNeon;
