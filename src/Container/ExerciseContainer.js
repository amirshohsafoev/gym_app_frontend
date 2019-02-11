import React from "react";
import ExerciseCard from "../Card/ExerciseCards";
class ExerciseContainer extends React.Component {
  renderExercise = () => {
    if (this.props.bodyExercises.exercises !== undefined) {
      return this.props.bodyExercises.exercises.map(exercise => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ));
    }
  };
  render() {
    // let { exercises } = this.props.bodyExercises;
    // console.log("my exercises", exercises);
    // let exercise = exercises.map(exercise => <ExerciseCard exercise={exercise} key={exercise.id}/>)
    return (
      <div>
        <h1>Exercises for: {this.props.bodyExercises.body_name}</h1>
        {this.renderExercise()}
      </div>
    );
  }
}

export default ExerciseContainer;
