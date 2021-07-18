import React, { useState } from "react";

const Todo = ({
  text,
  setTodos,
  todos,
  todo,
  date,
  setInputText,
  inputText,
}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
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

  var todosList = [];
  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }
  const inputValidation = () => {
    let dup = false;
    for (const i of todosList) {
      if (inputText.localeCompare(i) === 0) {
        dup = true;
      }
    }
    if (isEmptyOrSpaces(inputText) === true || dup === true) {
      alert("Your input is invalid. Input may be a duplicate or is empty");
      return;
    } else {
      console.log(todos);
      //  submitTodoHandler(e);
      todosList.push(inputText);
    }
  };

  const [copytext, setcopytext] = useState(text);
  const [ifHit, setifHit] = useState(false);
  const edit = () => {
    setifHit(!ifHit);
  };
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
          <div
            contenteditable="false"
            // onInput={(e) =>
          >
            {copytext}
          </div>
        )}
        <div contenteditable="false"> {date}</div>
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
export default Todo;
