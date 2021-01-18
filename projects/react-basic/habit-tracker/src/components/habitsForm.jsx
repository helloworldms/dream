import React, { Component } from "react";

class HabitsForm extends Component {
  inputRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const name = e.target.name.value;
    name && this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input name="name" type="text" placeholder="text"></input>
          <button type="submit">add</button>
        </form>
      </>
    );
  }
}

export default HabitsForm;
