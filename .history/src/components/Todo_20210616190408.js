import react from "react";

const Todo = ({ text, setTodos, todos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt beatae fugiat vitae aliquid porro nam. Dolores porro blanditiis animi, eligendi perferendis quos libero tempora error aperiam officia et sunt eius deserunt. Sint, eveniet hic? Ea iure nihil iusto, vero amet numquam cum vitae eius temporibus in optio, nostrum voluptatibus enim.  const completeHandler = () => {
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

return (
  <div className="todo">
    <li className={`todo-item ${todo.completed ? "completed" : ""} `}>
      {text}
    </li>
    <button
      onClick={completeHandler}
      data-testid="new-item-button"
      className="complete-btn"
    >
      <i className="fas fa-check"></i>
    </button>
    <button onClick={deleteHandler} className="trash-btn">
      <i className="fas fa-trash"></i>
    </button>
    {/* <button onClick={editHandler} className="edit button"> */}
    <button className="edit-btn">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
);
};

export default Todo;
