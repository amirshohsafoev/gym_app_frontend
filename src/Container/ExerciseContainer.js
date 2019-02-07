import React from "react";
import ExerciseCard from "../Card/ExerciseCards";
class ExerciseContainer extends React.Component {
  // renderExercise() {
  //   return this.props.exercises.map(exercise => (
  //     <ExerciseCard exercise={exercise} />
  //   ));
  // }
  renderExercise = () => {
    // debugger;
    if (this.props.exercises !== undefined) {
      return this.props.exercises.map(exercise => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ));
    }
  };
  render() {
    console.log("my exercises", this.props);

    return (
      <div>
        <h1>Exercises</h1>
        {this.renderExercise()}
      </div>
    );
  }
}

export default ExerciseContainer;
