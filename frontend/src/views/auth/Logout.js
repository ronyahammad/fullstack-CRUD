import React, { useState, useEffect, Fragment } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  btnstyle: {
    margin: "8px 0",
  },
});
const Logout = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      window.location.replace(
        "https://floating-caverns-95315.herokuapp.com/login"
      );
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();

    fetch("https://tododdjangoapi.herokuapp.com/api/auth/logout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.clear();
        window.location.replace(
          "https://floating-caverns-95315.herokuapp.com/login"
        );
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
      {loading === false && (
        <Fragment>
          <h1>Are you sure you want to logout?</h1>
          <Button
            type="button"
            color="primary"
            variant="contained"
            className={classes.btnstyle}
            value="Logout"
            onClick={handleLogout}
          >
            Log out
          </Button>
        </Fragment>
      )}
    </motion.div>
  );
};

export default Logout;
