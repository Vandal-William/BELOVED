import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components:{
        MuiAppBar: {
            styleOverrides: {
                root:{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    padding:'2rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '2rem', 
                    position: 'absolute'
                }
            }
        },
        MuiBox: {
            styleOverrides: {
                root:{
                    backgroundColor: 'Black',
                    
                }
            }
        }
    }
});

export default theme
