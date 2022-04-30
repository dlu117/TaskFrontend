import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, createStyles, Drawer, IconButton, makeStyles, Theme, Toolbar } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import {Sidebar} from './SideBar';

// ask stackoverflow 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Header() { 
 
  const [sideBar, setSideBar] = useState(false);
  const classes = useStyles();

  const toggleSideBar = () => {
      setSideBar(!sideBar);
  };
    
  return (
    <div className={classes.root}>
      <AppBar position="static"  >
        <Toolbar>

          <IconButton  onClick={toggleSideBar} className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
            <Sidebar />
            </Drawer>
          </IconButton>

          <Typography variant="h6" className={classes.title}>News</Typography>

          <Button color="inherit">Login</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}