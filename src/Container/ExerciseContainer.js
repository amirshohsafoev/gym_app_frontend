import React from "react";
class ExerciseContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Exercises</h1>
        <p>{this.props.exercises.exercise_name}</p>
      </div>
    );
  }
}

export default ExerciseContainer;
