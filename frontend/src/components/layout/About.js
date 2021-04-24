import React from "react";
import {
  makeStyles,
  Paper,
  Container,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 15,
    borderRadius: 20,
    padding: 50,
  },
}));
export default function About() {
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: { scale: 1, opacity: 1, transition: { delay: 0.2 } },
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              About This App!!
            </Typography>
          </motion.div>
          <CardContent>
            <Paper square={true} className={classes.pos}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.4 },
                  },
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ textDecoration: "underline" }}
                >
                  Backend
                </Typography>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.6 },
                  },
                }}
              >
                <Typography variant="body2" color="textPrimary" component="p">
                  <CheckSharpIcon />
                  Class based views by Django Rest API and openAPI
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  <CheckSharpIcon />
                  Token based Authentication and user access permission control
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  <CheckSharpIcon />
                  Full CRUD API only by the user.API link:
                  https://tododdjangoapi.herokuapp.com/docs/
                </Typography>
              </motion.div>
            </Paper>
            <Paper variant="outlined" style={{ borderRadius: 20, padding: 50 }}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.4 },
                  },
                }}
              >
                <Typography
                  style={{ textDecoration: "underline" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Frontend
                </Typography>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.8 },
                  },
                }}
              >
                <Typography variant="body2" color="textPrimary" component="p">
                  <CheckSharpIcon />
                  React-hooks state management and Django-CorsHeaders is used
                  for inter-communication
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  <CheckSharpIcon />
                  Material-ui is used for UX
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  <CheckSharpIcon />
                  Framer-motion is used for animation
                </Typography>
              </motion.div>
            </Paper>
          </CardContent>
        </Card>
      </Container>
    </motion.div>
  );
}
