// == Import
import { Box, Grid } from '@mui/material'
import theme from '../../selectors/Theme'
import Header from '../Header';
import HomeTabsAll from './HomeTabsAll';
import HomeTabsNeon from './HomeTabsNeon';
import HomeTabsDark from './HomeTabsDark';
import HomeTabsTech from './HomeTabsTech';
import HomeTabs from './HomeTabs';
import { useSelector } from 'react-redux';

// == Composant
function Home() {
  const tabs = useSelector(state => state.tabs)
  console.log(tabs)
  return (
    <>
      <Header />
      <Box sx={{bgcolor: 'black', paddingBottom: '2rem'}}>
        <HomeTabs />
        {tabs === 0 && ( <HomeTabsAll />)}
        {tabs === 1 && ( <HomeTabsNeon />)}
        {tabs === 2 && ( <HomeTabsDark />)}
        {tabs === 3 && ( <HomeTabsTech />)}
         
      </Box>
    </>

  );
}

// == Export
export default Home;
