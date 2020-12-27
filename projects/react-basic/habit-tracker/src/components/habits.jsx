import React, { Component } from "react";
import Habit from "./habit";
import HabitsForm from "./habitsForm";
import Nav from "./Nav";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "HTML", count: 0 },
      { id: 2, name: "CSS", count: 0 },
      { id: 3, name: "JAVA", count: 0 },
    ],
  };

  handleIncreament = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecreament = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    console.log(index);
    const count = habits[index].count--;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };
  // 특정 제외 ,추가 가능 필터

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

  handleTotal() {
    this.state.habits.filter(function (item) {
      const count = (item.count > 0).length;

      return count;
    });
  }

  render() {
    return (
      <>
        <Nav total={this.handleTotal}></Nav>
        <HabitsForm onAdd={this.handleAdd}></HabitsForm>
        <ul>
          {this.state.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncreament={this.handleIncreament}
              onDecreament={this.handleDecreament}
              onDelet={this.handleDelete}
            ></Habit>
          ))}
        </ul>
        <button onClick={this.handleReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;
