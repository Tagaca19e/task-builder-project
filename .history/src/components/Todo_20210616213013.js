import react from "react";

const Todo = ({ text, setTodos, todos, todo }) => {
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

  const editHandler = (e) => {
    setTodos(e.target.value);
    // setInputText(e.target.value);
  };

  {
    /* <button onClick={editHandler} className="edit button"> */
  }
  // <button className="edit-btn">
  //   <i class="fas fa-pencil-alt"></i>
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""} `}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>

      <button onClick={editHandler} className="edit-btn">
        <i class="fas fa-pencil-alt"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
