import React, { useState, useEffect, Fragment } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuOpenTwoToneIcon from "@material-ui/icons/MenuOpenTwoTone";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button, MenuItem, List, ListItem } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Login from "../../views/auth/Login";
import Signup from "../../views/auth/Signup";
import Logout from "../../views/auth/Logout";
import Dashboard from "../../views/app/Dashboard";
import About from "./About";
import Home from "./Home";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },

  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(5),
  },

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    background: "linear-gradient(#7b1fa2, #dd2c00)",
    width: drawerWidth,
  },
  drawerHeader: {
    alignItems: "center",
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    //background: "#e1bee7",
    background: "linear-gradient(250deg, #632761, #e1bee7)",
    textAlign: "center",
    height: "300vh",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    height: "100vh",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  sectionDesktop: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "none",
    marginRight: theme.spacing(8),
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div>
      <CssBaseline />
      <AppBar
        border={0}
        style={{
          background: "linear-gradient(250deg, #e040fb, #62121B)",
          backgroundRepeat: "no-repeat",
          boxShadow: "0px 0px 0px 0px",
        }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Tasks Listings
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {isAuth === true ? (
              <Fragment>
                <Button
                  style={{ backgroundColor: "transparent" }}
                  color="primary"
                  component={Link}
                  to="/Logout"
                >
                  Logout
                </Button>
                <Button
                  style={{ backgroundColor: "transparent" }}
                  color="primary"
                  component={Link}
                  to="/Dashboard"
                >
                  Dashboard
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Button
                  style={{ backgroundColor: "transparent" }}
                  color="primary"
                  component={Link}
                  to="/Login"
                >
                  Login
                </Button>
                <Button
                  style={{ backgroundColor: "transparent" }}
                  color="primary"
                  component={Link}
                  to="/Signup"
                >
                  Signup
                </Button>
              </Fragment>
            )}
            <Button
              style={{ backgroundColor: "transparent" }}
              color="primary"
              component={Link}
              to="/About"
            >
              About
            </Button>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuOpenTwoToneIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/" component={Home} exact />
            <Route path="/Login" component={Login} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/logout" component={Logout} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/About" component={About} exact />
          </Switch>
        </AnimatePresence>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <MenuItem>
          {isAuth === true ? (
            <Fragment>
              <List>
                <ListItem>
                  <Button
                    style={{ backgroundColor: "transparent" }}
                    color="primary"
                    component={Link}
                    to="/Logout"
                  >
                    Logout
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    style={{ backgroundColor: "transparent" }}
                    color="primary"
                    component={Link}
                    to="/Dashboard"
                  >
                    Dashboard
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    style={{ backgroundColor: "transparent" }}
                    component={Link}
                    to="/About"
                  >
                    About
                  </Button>
                </ListItem>
              </List>
            </Fragment>
          ) : (
            <Fragment>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                  <Button
                    style={{ backgroundColor: "transparent" }}
                    component={Link}
                    to="/Login"
                  >
                    Login
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    style={{ backgroundColor: "transparent" }}
                    component={Link}
                    to="/Signup"
                  >
                    Signup
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    style={{ backgroundColor: "transparent" }}
                    component={Link}
                    to="/About"
                  >
                    About
                  </Button>
                </ListItem>
              </List>
            </Fragment>
          )}
        </MenuItem>
      </Drawer>
    </div>
  );
}
