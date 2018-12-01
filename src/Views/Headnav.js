import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  Button: {
    position: "absolute",
    right: "5px",
  },

};

const Headnav = () => {
    return(
        <div className={styles.root}>
        <AppBar position="static">
            <Toolbar>
            <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
             </IconButton>
                <Typography className={styles.grow} variant="title" color="inherit">
                Carpool
                </Typography>
                <div style={styles.Button}>
                <Button href="/SignIn" color="inherit">Sign In</Button>
                <Button href="/SignUp" color="inherit">Sign Up</Button>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default Headnav;