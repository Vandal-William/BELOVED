// == Import
import {Box} from '@mui/material'
import { styled } from '@mui/system';
import AllProduct from './AllProduct';
import { useSelector } from 'react-redux';

// == Composant
function HomeTabsAll() {
  const data = useSelector(state => state.wallet.products)

  const ProductContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '3rem',
      flexWrap: 'wrap'
    },
  }));
  
  return (
   
   <ProductContainer sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginTop: '5rem', marginBottom: '5rem'}}>
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
   </ProductContainer>

  );
}

// == Export
export default HomeTabsAll;
