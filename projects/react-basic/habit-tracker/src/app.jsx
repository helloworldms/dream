import React, { Component } from "react";
import "./app.css";
import Habit from "./components/habit";

function App() {
  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">8</span>
      <button className="habit-button habbit-increase">
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habbit-decrase">
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habbit-delete">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}

export default App;
