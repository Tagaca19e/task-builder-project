import React from "react";

var todosList = [];

const form = ({ setInputText, todos, setTodos, inputText, date }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000, date },
    ]);
    setInputText("");
  };

  const inputValidation = (e) => {
    e.preventDefault();
    let dup = false;
    for (const i of todosList) {
      if (inputText.localeCompare(i) == 0) {
        dup = true;
      }
    }
    if (inputText !== "" && inputText !== " " && !dup) {
      console.log(todos);
      submitTodoHandler(e);
    }
    todosList.push(inputText);
  };

  const displayDate = (e) => {
    console.log(date);
    submitTodoHandler(e);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button
        onClick={inputValidation}
        onClick={displayDate}
        className="todo-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
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
