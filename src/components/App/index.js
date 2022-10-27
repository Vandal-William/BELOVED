// == Import
import { ThemeProvider} from '@mui/material/styles';
import theme from '../../selectors/Theme'
import { Route, Routes } from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../Home';
// == Composant
function App() {
  return (
    <ThemeProvider theme={theme}>

      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        

    </ThemeProvider>

  );
}

// == Export
export default App;
