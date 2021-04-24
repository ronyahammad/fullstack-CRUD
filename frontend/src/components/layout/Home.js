import React from "react";
import { makeStyles, Container, Card, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="sm" className={classes.root}>
        <Card
          style={{
            width: "100%",
            backgroundColor: "#e1bee7",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Welcome to the Task Management!
          </Typography>
        </Card>
      </Container>
    </motion.div>
  );
}
