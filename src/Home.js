import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import {
  AccountCircle,
  MoreVert,
  Subscriptions,
  Whatshot,
} from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import VideoCall from "@material-ui/icons/VideoCall";

//criando classes
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  logo: {
    height: "30px",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  ListItemText: {
    fontSize: 14,
  },
  ListItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src="/images/preto.png" alt="logo" className={classes.logo} />

          <div className={classes.grow}></div>

          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <VideoCall />
          </IconButton>

          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <Apps />
          </IconButton>

          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <MoreVert />
          </IconButton>

          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon> {<HomeIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.ListItemText,
                }}
                primary={"Início"}
              />
            </ListItem>

            <ListItem button>
              <ListItemIcon> {<Subscriptions />}</ListItemIcon>

              <ListItemText
                classes={{
                  primary: classes.ListItemText,
                }}
                primary={"Em alta"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.ListItem }}>
              <ListItemIcon> {<Whatshot />}</ListItemIcon>

              <ListItemText
                classes={{
                  primary: classes.ListItemText,
                }}
                primary={"Inscrições"}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
export default Home;
