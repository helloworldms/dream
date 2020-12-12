import React, { PureComponent } from "react";

// pure + 리랜더링 되지 않음
// 컴포넌트 업데이트 전 프롭,스테이트 비교 같으면 업데이트 하지 않음 false리턴 shallow
class HabitAddForm extends PuerComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
