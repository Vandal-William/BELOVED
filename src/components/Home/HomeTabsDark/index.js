// == Import
import { Box } from '@mui/material'
import { styled } from '@mui/system';
import DarkProduct from './DarkProduct';
import { useSelector } from 'react-redux';
// == Composant
function HomeTabsDark() {
  const data = useSelector(state => state.wallet.products)
  const dark = data.filter(darkproduct => darkproduct.type === 'Dark')

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
   </ProductContainer>

  );
}

// == Export
export default HomeTabsDark;
