import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {motion} from 'framer-motion'

const useStyles = makeStyles({
  paperStyle: {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e",
  },
  btnstyle: {
    margin: "8px 0",
  },
});
const Signup = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      window.location.replace(
        "https://floating-caverns-95315.herokuapp.com/dashboard"
      );
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username:username,
      email: email,
      password1: password1,
      password2: password2,
    };

    fetch("https://tododdjangoapi.herokuapp.com/api/auth/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem("token", data.key);
          window.location.replace(
            "https://floating-caverns-95315.herokuapp.com/dashboard"
          );
        } else {
          setUsername("");
          setEmail("");
          setPassword1("");
          setPassword2("");
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        position: "relative",
        zIndex: 1,
        scale: 1.2,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Grid>
        <Paper elevation={10} className={classes.paperStyle}>
          <Grid align="center">
            <Avatar className={classes.avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            {loading === false && <h1>Signup</h1>}
          </Grid>
          {errors === true && <h2>Cannot signup with provided credentials</h2>}
          <form onSubmit={onSubmit}>
            <TextField
              label="Username"
              placeholder="Enter username"
              fullWidth
              required
              name="username"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Email"
              placeholder="Enter your email"
              fullWidth
              required
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              placeholder="Enter your Password"
              fullWidth
              required
              name="password1"
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <TextField
              label="Password"
              placeholder="repeat Password"
              fullWidth
              required
              name="password"
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.btnstyle}
              fullWidth
              value="Signup"
            >
              Sign Up
            </Button>
            </form>
        </Paper>
      </Grid>
    </motion.div>
  );
};

export default Signup;
