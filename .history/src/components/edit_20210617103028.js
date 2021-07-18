import React, { useState } from "react";

const Edit = ({ text, setTodos, todos, todo, setInputText, inputText }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  return (
    <div className="todo" key={todo.id}>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <span>{todos.task}</span>
      <button onClick={handleEdit} disabled={todos.completed}>
        Edit
      </button>
    </div>
  );
};

export default Edit;

//  <form>
//       <input
//         value={inputText}
//         onChange={inputTextHandler}
//         type="text"
//         className="todo-input"
//       />
//       <button onClick={inputValidation} className="todo-button" type="submit">
//         <i className="fas fa-plus-square"></i>
//       </button>
