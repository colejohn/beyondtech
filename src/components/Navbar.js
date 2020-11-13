import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: "100%",
  },
  menuButton: {
    "& > *": {
      margin: theme.spacing(2),
      flexGrow: 1,
      justifyContent: "center",
    },
  },
  title: {
    flexGrow: 3,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <nav>
      <AppBar position="static" color="default">
        <Toolbar>
          {/* <IconButton
    edge="start"
    className={classes.menuButton}
    color="inherit"
    aria-label="menu"
    >
    <MenuIcon />
  </IconButton> */}
          <Typography
            variant="h6"
            to="/"
            className={classes.title}
          >
            Beyond Tech
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default Navbar;
