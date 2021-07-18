// import { TextField, Button } from "@material-ui/core";
// import React, { useState } from "react";
// import "./input.css";
// // import { FaGithub } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const initialTodo = [""];

// function Input(props) {
//   const [input, setInput] = useState("");
//   const [list, setTodo] = React.useState(initialTodo);

//   function handleAdd() {
//     const newList = list;
//     newList.push(input);
//     setTodo(newList);
//     console.log(list);
//     setInput("");
//     handleClear();
//     // debugger;
//   }

//   const handleClear = () => {
//     Array.from(document.querySelectorAll("input")).forEach((input) => {
//       input.value = "";
//     });
//     Array.from(document.querySelectorAll("textarea")).forEach((textarea) => {
//       textarea.value = "";
//     });
//   };

//   return (
//     <div className="inputcolor">
//       <TextField
//         className="inputtext"
//         onKeyPress={(event) => {
//           if (event.key === "Enter") {
//             handleAdd();
//           }
//         }}
//         onChange={(event) => {
//           setInput(event.target.value);
//           console.log(input);
//         }}
//         label=""
//         variant="outlined"
//       />

//       <Button
//         onClick={handleAdd}
//         variant="contained"
//         color="primary"
//         className="button"
//       >
//         Submit
//       </Button>

//       <div className="list">
//         <p className="container">
//           {list &&
//             list.map((item, index) => {
//               return (
//                 <div className="line">
//                   <li className="list" key={index}>
//                     {item}
//                   </li>
//                 </div>
//               );
//             })}
//         </p>
//       </div>
//       {/* list not updating quick but data does get added */}
//     </div>
//   );
// }

// export default Input;

import React from "react";
import "./input.css";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        console.log(item.key + "    " + key);
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button type="submit">Add</button>
          </form>
          <p>{this.state.items.text}</p>

          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </header>
      </div>
    );
  }
}

export default App;
