import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
// import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <>
        <Habits></Habits>
      </>
    );
  }
}

export default App;
