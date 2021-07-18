import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
const Todo = ({ text, setTodos, todos, todo, date }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const useStyles = makeStyles((theme) => ({
    completebtn: {
      background: "#2ea8d9",
      color: "white",
      border: "none",
      padding: "1rem",
      cursor: "pointer",
      fontSize: "0.9rem",
      borderRadius: "15px",
      margin: "1px",
    },
    editbtn: {
      background: "#2a2b2d",
      color: "white",
      border: "none",
      padding: "1rem",
      cursor: "pointer",
      fontSize: "0.9rem",
      borderRadius: "15px",
      margin: "1px",
    },
    trashbtn: {
      background: "rgb(228, 39, 39)",
      color: "white",
      border: "none",
      padding: "1rem",
      cursor: "pointer",
      fontSize: "0.9rem",
      borderRadius: "15px",
      margin: "1px",
    },
  }));
  const classes = useStyles();
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const [copytext, setcopytext] = useState(text);
  const [ifHit, setifHit] = useState(false);
  const edit = () => {
    setifHit(!ifHit);
  };

  // var today = new Date();
  // var date =
  //   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  // var time =
  //   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // var dateTime = date + " " + time;

  return (
   <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""} `} onCh>
        {ifHit == true ? (
          // if hit is true then render the 1st div(runs the code)
          <div
            contenteditable="true"
            // onInput={(e) =>
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                edit();
              }
            }}
          >
            {copytext}
          </div>
        ) : (
          <div contenteditable="false">
            <br />
            {copytext}
            <br />
          </div>
        )}
        <div contenteditable="true"> {date} </div>
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      {/* edit handled should be here */}
      <button className="edit-btn" onClick={edit}>
        <i class="fas fa-pencil-alt"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

      <Button
        variant="contained"
        onClick={completeHandler}
        className={classes.completebtn}
      >
        <i className="fas fa-check"></i>
      </Button>

      {/* edit handled should be here */}
      <Button variant="contained" className={classes.editbtn} onClick={edit}>
        <i class="fas fa-pencil-alt"></i>
      </Button>

      <Button
        variant="contained"
        onClick={deleteHandler}
        className={classes.trashbtn}
      >
        <i className="fas fa-trash"></i>
      </Button>
    </div>
  );
};

export default Todo;
