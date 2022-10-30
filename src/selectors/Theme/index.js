import { createTheme } from '@mui/material/styles';

const theme = createTheme({

    breakpoints: {
        values: {
          xs: 0,
          sm: 500,
          md: 820,
          lg: 1200,
          xl: 1536,
        },
      },

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
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            },
            styleOverrides: {
                root:{
                   
                }
            }
        }
    }
});

export default theme
