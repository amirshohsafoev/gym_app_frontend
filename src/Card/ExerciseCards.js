import React from "react";
class ExerciseCard extends React.Component {
  render() {
    console.log(this.props.exercise);
    return <h1>{this.props.exercise.exercise_name}</h1>;
  }
}
export default ExerciseCard;
