import React, { useState } from "react";
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
export default function CreateTodo({ addTodoList }) {
  const classes = useStyles();
  const initialTodoState = { id: null, title: "", body: "" };
  const [todoList, setTodolist] = useState(initialTodoState);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setTodolist({ ...todoList, [name]: value });
  };

  return (
    <Container maxWidth="sm" className={classes.cont}>
      <Card style={{ width: "100%", backgroundColor: "#e1bee7" }}>
        <Box className={classes.box2}>
          <Typography variant="h4" component="h2" gutterBottom>
            Create Task
          </Typography>
        </Box>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(event) => {
            event.preventDefault();
            if (!todoList.title || !todoList.body) return;

            addTodoList(todoList);
            setTodolist(initialTodoState);
          }}
        >
          <div>
            <TextField
              id="outlined-textarea"
              label="Title"
              placeholder="Placeholder"
              variant="outlined"
              style={{ width: "70%" }}
              required
              type="text"
              name="title"
              value={todoList.title}
              onChange={handleInput}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              required
              rows={4}
              variant="outlined"
              style={{ width: "70%" }}
              type="text"
              name="body"
              value={todoList.body}
              onChange={handleInput}
              defaultValue="Task Detail"
            />
          </div>
          <ColorButton
            type="submit"
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            Add New Task
          </ColorButton>
        </form>
      </Card>
    </Container>
  );
}
