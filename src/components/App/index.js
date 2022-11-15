
// == Import
import { ThemeProvider} from '@mui/material/styles';
import theme from '../../selectors/Theme'
import { Route, Routes } from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../Home';
import OneArtist from '../OneArtist';
import OneProduct from '../OneProduct';
import Account from '../Account';
import BottomBar from '../BottomBar';

// == Composant
import useScrollTop from '../../hooks/useScrollTop';
import MintNft from '../MintNft';

function App() {

  useScrollTop();
 
  return (
    <ThemeProvider theme={theme}>

      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artist/:id' element={<OneArtist />}/>
          <Route path='/product/:id' element={<OneProduct />}/>
          <Route path='/account' element={<Account />}/>
          <Route path='/mint' element={<MintNft />}/>
        </Routes>
        <BottomBar />

    </ThemeProvider>

  );
}

// == Export
export default App;
