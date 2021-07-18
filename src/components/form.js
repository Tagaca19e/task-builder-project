import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

//var todosList = [];

const form = ({ setInputText, todos, setTodos, inputText,setTDL, tDL }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const UseStyles = makeStyles((theme) => ({
    todobutton: {
      padding: "0.5rem",
      fontSize: "2rem",
      border: "none",
      background: "white",
      borderRadius: "15px",
      marginLeft: "3px",
    },
  }));
  const classes = UseStyles();
  const submitTodoHandler = (e) => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    console.log(dateTime);
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
        date: dateTime,
      },
    ]);
    setInputText("");

    console.log(todos);
  };
  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }
  const inputValidation = (e) => {
    e.preventDefault();
    let dup = false;
    for (const i of tDL) {
      if (inputText.localeCompare(i) == 0) {
        dup = true;
      }
    }
    if (isEmptyOrSpaces(inputText) == true || dup == true) {
      alert("Your input is invalid. Input may be a duplicate or is empty");
      return;
    } else {
      console.log(todos);
      submitTodoHandler(e);
      setTDL([...tDL,inputText]);
      //todosList.push(inputText);
      console.log(tDL[0]);
    }
  };

  // const displayDate = (e) => {
  //   console.log(date);
  //   submitTodoHandler(e);
  // };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        data-testid="new-item-input"
      />
      <Button
        variant="contained"
        onClick={inputValidation}
        // onClick={displayDate}
        className={classes.todobutton}
        data-testid="new-item-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </Button>
      {/* <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div> */}
    </form>
  );
};

export default form;
