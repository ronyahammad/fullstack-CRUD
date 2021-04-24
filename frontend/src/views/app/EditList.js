import React, { useState, useEffect } from "react";
import {
  TextField,
  makeStyles,
  Card,
  Typography,
  Box,
  Container,
  withStyles,
  Button,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  cont: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "40px",
  },
  box2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "20px",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[600],
    "&:hover": {
      backgroundColor: purple[300],
    },
  },
}))(Button);
export default function EditList({ todoList, setEditing, updateTodo }) {
  const classes = useStyles();
  const [todo, setTodo] = useState(todoList);
  useEffect(() => {
    setTodo(todoList);
  }, [todoList]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };
  return (
    <Container maxWidth="sm" className={classes.cont}>
      <Card style={{ width: "100%", backgroundColor: "#e1bee7" }}>
        <Box className={classes.box2}>
          <Typography variant="h4" component="h2" gutterBottom>
            Edit Task
          </Typography>
        </Box>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            updateTodo(todo.id, todo);
          }}
        >
          <div>
            <TextField
              id="outlined-textarea"
              label="Title"
              placeholder="Placeholder"
              type="text"
              name="title"
              value={todo.title}
              onChange={handleChange}
              multiline
              variant="outlined"
              style={{ width: "70%" }}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Body"
              multiline
              rows={4}
              type="text"
              name="body"
              value={todo.body}
              onChange={handleChange}
              defaultValue="Task Detail"
              variant="outlined"
              style={{ width: "70%" }}
            />
          </div>
          <ColorButton
            type="submit"
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            Update Task
          </ColorButton>
          <ColorButton
            variant="contained"
            color="primary"
            onClick={() => setEditing(false)}
            className={classes.margin}
          >
            Cancel
          </ColorButton>
        </form>
      </Card>
    </Container>
  );
}
