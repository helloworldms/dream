import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <span>Habit Tracker</span>
        <span>{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Nav;
