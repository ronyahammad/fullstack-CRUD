import React from "react";
import {
  makeStyles,
  Paper,
  CardContent,
  CssBaseline,
  Button,
  Card,
  CardActions,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import { motion } from "framer-motion";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "40px",
  },
  box1: {
    width: "50%",
  },
  box2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
}));
export default function TodoList({ todos, deleteTodo, editRow }) {
  const classes = useStyles();
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CssBaseline />
      <Container maxWidth="sm" className={classes.root}>
        <Card style={{ width: "100%", backgroundColor: "#e1bee7" }}>
          <Box className={classes.box2}>
            <Typography variant="h4" component="h2" gutterBottom>
              {" "}
              Tasks List
            </Typography>
          </Box>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: { scale: 1, opacity: 1, transition: { delay: 0.3 } },
                }}
                key={todo.id}
              >
                <CardContent>
                  <Paper
                    variant="outlined"
                    elevation={2}
                    style={{ backgroundColor: "#fce4ec" }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {todo.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {todo.body}
                    </Typography>
                  </Paper>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      editRow(todo);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </motion.div>
            ))
          ) : (
            <CardContent>
              <Paper
                variant="outlined"
                elevation={2}
                style={{ backgroundColor: "#fce4ec" }}
              >
                <Typography>No tasks</Typography>
              </Paper>
            </CardContent>
          )}
        </Card>
      </Container>
    </motion.div>
  );
}
