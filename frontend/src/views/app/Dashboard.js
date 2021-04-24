import React, { useState, useEffect, Fragment } from "react";
import EditList from "./EditList";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const initialTodoSate = { id: null, title: "", body: "" };
  const [todos, setTodos] = useState([]);
  const [todoList, setTodolist] = useState(initialTodoSate);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      window.location.replace(
        "https://floating-caverns-95315.herokuapp.com/login"
      );
    } else {
      fetch("https://tododdjangoapi.herokuapp.com/api/auth/user/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserEmail(data.email);
          setUsername(data.username);
        });
      fetch("https://tododdjangoapi.herokuapp.com/api/todo/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTodos([...data]);
          setLoading(false);
        });
    }
  }, []);

  const addTodoList = (todo) => {
    fetch("https://tododdjangoapi.herokuapp.com/api/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        todo.id = todos.length + 1;
        setTodos([todo, ...todos]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTodo = (id) => {
    fetch(`https://tododdjangoapi.herokuapp.com/api/todo/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateTodo = (id, todo) => {
    fetch(`https://tododdjangoapi.herokuapp.com/api/todo/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEditing(false);
        setTodos(todos.map((item) => (item.id === id ? todo : item)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editRow = (todo) => {
    setEditing(true);

    setTodolist({
      id: todo.id,
      title: todo.title,
      description: todo.description,
    });
  };

  return (
    <div>
      {loading === false && (
        <Fragment>
          <h1>Dashboard</h1>
          <h2>Hello {username}!</h2>
          {editing ? (
            <div>
              <h3>Edit Task</h3>
              <EditList
                editing={editing}
                setEditing={setEditing}
                todoList={todoList}
                updateTodo={updateTodo}
              />
            </div>
          ) : (
            <div>
              <CreateTodo addTodoList={addTodoList} />
              <hr />
            </div>
          )}
          <div className="flex-row">
            <div className="flex-large">
              <TodoList
                todos={todos}
                editRow={editRow}
                deleteTodo={deleteTodo}
              />
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
