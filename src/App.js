import React from 'react';
import {ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core';
import Home from './Home';

//criando classes
const useStyles = makeStyles({
  root: {
    background: 'red',
    height: '100vh'
  }
}); 


function App() {
  //criando tema
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary:{
        main: '#3f51b5'
      }
    },
  });

  // const classes = useStyles();

  return (
    //estilizar temas
    <ThemeProvider theme={theme}>
       <Home />
    </ThemeProvider>
  );
}

export default App;
