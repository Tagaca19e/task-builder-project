import React from "react";
class Date extends React.Component {
  state = {
    date: "",
  };

  getDate() {
    var date = { currentTime: new Date().toLocaleString() };

    this.setState({
      date: date,
    });
  }

  render() {
    return (
      <div class="date">
        <p> ddd {this.state.date}</p>
      </div>
    );
  }
}

export default App;
