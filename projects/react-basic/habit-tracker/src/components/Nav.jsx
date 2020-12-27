import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <span>Habit Tracker</span>
        <span>{this.props.total}</span>
      </div>
    );
  }
}

export default Nav;
