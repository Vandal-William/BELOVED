import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';

function BottomBar() {
  const eth = useSelector(state => state.eth)
  const isLogged = useSelector(state => state.loggin)
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(0);

  const NavBottom = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('xs', 'sm')]: {
        display: 'block'
    },
  }));
  const EthAmount = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none'
    },
  }));

  const connectedWalletHandler = () => {
    dispatch({
      type: 'CONNECT_WALLET'
    })
  }


  return (
    
    <>
    { isLogged && 
      <EthAmount  
        sx={{
          bgcolor: 'white', 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',  
          width: '30%'
        }} 
      > 
        {Math.round(eth * 100) / 100} ETH 
        
      </EthAmount>
      
    }

    <NavBottom sx={{ width: '100%', display: 'none' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{backgroundColor: 'black'}}
      > 
        <BottomNavigationAction component={Link} to='/' label='Home' icon={<HomeIcon sx={{color: 'white'}}/>} />
        {!isLogged && <BottomNavigationAction onClick={connectedWalletHandler} label='Metamask' icon={<AccountBalanceWalletIcon sx={{color: 'white'}}/>} />}
        {isLogged && <BottomNavigationAction component={Link} to='/account' label='Account' icon={<AccountCircleIcon sx={{color: 'white'}}/>} />}
       
        
      </BottomNavigation>
    </NavBottom>
    </>
  );
}

export default BottomBar;