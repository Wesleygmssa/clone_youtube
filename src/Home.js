import { AppBar, Button, IconButton, makeStyles,  Toolbar } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {  AccountCircle, MoreVert} from '@material-ui/icons';
import Apps from '@material-ui/icons/Apps';
import VideoCall from '@material-ui/icons/VideoCall';

//criando classes
const useStyles = makeStyles((theme) =>({
    root: {
      height: '100vh',
    
    },
    appBar: {
        boxShadow: 'none',
    },
    grow:{
        flexGrow: 1
    },
    icons:{
       paddingRight: theme.spacing(5),
    },
    menuIcon:{
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6)
    },
    logo:{
        
    }
    
  })); 

const Home = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar} >
             <Toolbar>

                 <IconButton
                 edge="start" 
                 className={classes.menuIcon} 
                 color="inherit" 
                 aria-label="menu">
                  <MenuIcon />
                 </IconButton>
                 <img src="/images/preto.png" alt="logo"  className={classes.logo}/>

                    <div className={classes.grow}></div>

                    <IconButton
                 edge="start" 
                 className={classes.icons} 
                 color="inherit" 
                 aria-label="menu">
                  <VideoCall />
                 </IconButton>

                 <IconButton
                 edge="start" 
                 className={classes.icons} 
                 color="inherit" 
                 aria-label="menu">
                  <Apps />
                 </IconButton>

                 <IconButton
                 edge="start" 
                 className={classes.icons} 
                 color="inherit" 
                 aria-label="menu">
                  <MoreVert />
                 </IconButton>
                    
                    <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer Login</Button>
             </Toolbar>
            </AppBar>
        </div>
    )
}
export default Home;