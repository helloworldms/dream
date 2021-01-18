import React, { Component } from "react";

class Habit extends Component {
  render() {
    console.log(this.props.habit);

    const { name, count, id } = this.props.habit;
    return (
      <li>
        <span key={id}>
          {name}
          {count}
        </span>
        <button onClick={() => this.props.onIncreament(this.props.habit)}>
          +
        </button>
        <button onClick={() => this.props.onDecreament(this.props.habit)}>
          -
        </button>
        <button onClick={() => this.props.onDelete(this.props.habit)}>
          del
        </button>
      </li>
    );
  }
}

export default Habit;
