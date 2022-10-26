// == Import
import { ThemeProvider} from '@mui/material/styles';
import { Container } from '@mui/material'
import theme from '../../selectors/Theme'
import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
// == Composant
function App() {
  return (
    <ThemeProvider theme={theme}>

      <NavBar />
      <Header />

      <Container>

        <Routes>
          <Route />
        </Routes>
        
      </Container>

    </ThemeProvider>

  );
}

// == Export
export default App;
