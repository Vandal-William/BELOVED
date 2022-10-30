
// == Import
import { ThemeProvider} from '@mui/material/styles';
import theme from '../../selectors/Theme'
import { Route, Routes } from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../Home';
import OneArtist from '../OneArtist';
import OneProduct from '../OneProduct';
import { useSelector } from 'react-redux';
import Account from '../Account';
import BottomBar from '../BottomBar';
// == Composant
function App() {
 const web3 = useSelector(state => state.web3)
 console.log(web3)
  return (
    <ThemeProvider theme={theme}>

      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artist/:id' element={<OneArtist />}/>
          <Route path='/product/:id' element={<OneProduct />}/>
          <Route path='/account' element={<Account />}/>
        </Routes>
        <BottomBar />

    </ThemeProvider>

  );
}

// == Export
export default App;
