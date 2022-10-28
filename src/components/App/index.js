// == Import
import { ThemeProvider} from '@mui/material/styles';
import theme from '../../selectors/Theme'
import { Route, Routes } from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../Home';
import OneProduct from '../OneProduct';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
// == Composant
function App() {

  return (
    <ThemeProvider theme={theme}>

      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<OneProduct />}/>
        </Routes>
        

    </ThemeProvider>

  );
}

// == Export
export default App;
