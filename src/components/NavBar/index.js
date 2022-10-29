// == Import
import { AppBar, Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// == Composant
function NavBar() {
  const isLogged = useSelector(state => state.loggin)
  const eth = useSelector(state => state.eth)
  const dispatch = useDispatch()

  const connectedWalletHandler = () => {
    dispatch({
      type: 'CONNECT_WALLET'
    })
  }
 
  return (

   <AppBar>
      <Typography variant='h3' component={Link} to='/'> BELOVED </Typography>

      <Box sx={{display: 'flex', justifyContent: 'start', gap: '3rem', alignItems: 'center'}}>
        {isLogged && (
          <Box sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <AccountBalanceWalletIcon/> 
            <Typography variant='h6' fontWeight='bold' color='white' > {eth} ETH </Typography>
          </Box>
          
          )}
        {isLogged && <Typography variant='h6' fontWeight='bold' color='white'> Account</Typography>}
        <Typography variant='h6' fontWeight='bold' component={Link} to='/'> Products </Typography>
         {!isLogged && <Button onClick={connectedWalletHandler}> Connect to Metamask</Button>}
      </Box>
      
   </AppBar>

  );
}

// == Export
export default NavBar;
