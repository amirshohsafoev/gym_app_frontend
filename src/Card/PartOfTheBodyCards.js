import React from "react";
import ExerciseContainer from "../Container/ExerciseContainer";
// import { connect } from "react-redux";
class PartOfTheBodyCard extends React.Component {
  renderExercise() {
    return this.props.body.exercises.map(exercise => {
      console.log("hi");
      return <ExerciseContainer exercise={exercise} />;
    });
  }
  render() {
    return (
      <div>
        <h1>{this.props.body.body_name}</h1>
        <img
          onClick={() => this.renderExercise()}
          src={this.props.body.picture_url}
        />
      </div>
    );
  }
}

export default PartOfTheBodyCard;
