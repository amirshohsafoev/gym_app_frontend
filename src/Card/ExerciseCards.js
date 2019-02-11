import React from "react";
class ExerciseCard extends React.Component {
  render() {
    let { exercise } = this.props;
    // console.log(exercise.picture1_url);
    return (
      <div>
        <h1>{exercise.exercise_name}</h1>
        <img src={exercise.picture1_url} alt={exercise.picture1_url} />
      </div>
    );
  }
}
export default ExerciseCard;
