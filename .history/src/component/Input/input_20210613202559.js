import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./input.css";
import { FaGithub } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const initialTodo = [""];

function Input(props) {
  const [input, setInput] = useState("");
  const [list, setTodo] = React.useState(initialTodo);

  function handleAdd() {
    const newList = list;
    newList.push(input);
    setTodo(newList);
    console.log(list);
    setInput("");
    handleClear();
    // debugger;
  }

  const handleClear = () => {
    Array.from(document.querySelectorAll("input")).forEach((input) => {
      input.value = "";
    });
    Array.from(document.querySelectorAll("textarea")).forEach((textarea) => {
      textarea.value = "";
    });
  };
  return (
    <div className="inputcolor">
      <TextField
        className="inputtext"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleAdd();
          }
        }}
        onChange={(event) => {
          setInput(event.target.value);
          console.log(input);
        }}
        label=""
        variant="outlined"
      />

      <Button
        onClick={handleAdd}
        variant="contained"
        color="primary"
        className="button"
      >
        Submit
      </Button>

      <div className="list">
        <p className="container">
          {list &&
            list.map((item, index) => {
              return (
                <li className="list" key={index}>
                  {item}
                  {"fgsdf "}
                  {/* <span>
                    <FontAwesomeIcon
                      className="faicons"
                      onClick={() => {
                        props.deleteItem(item.key);
                      }}
                      icon="trash"
                    />
                  </span> */}
                </li>
              );
            })}
        </p>
      </div>
      {/* list not updating quick but data does get added */}
    </div>
  );

  // function Input(props){
  //   const items = props.items;
  //   const listItems = items.map(item =>
  //  {
  //      return <div className="list" key={item.key}>
  //    <p>
  //        <input type="text" id={item.key} value={item.text} onChange={(e)=>{
  //            props.setUpdate(e.target.value,item.key)}}/>
  //       <span>

  //       <FontAwesomeIcon className="faicons" onClick={() => {
  //           props.deleteItem(item.key)
  //       }} icon="trash" />
  //       </span>
  //    </p>

  //   </div>})
  //   return <div>
  //       <FlipMove duration={300} easing="ease-in-out">
  //       {listItems}
  //       </FlipMove>

  //   </div>;
}

export default Input;
