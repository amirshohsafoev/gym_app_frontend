import React from "react";
import ExerciseContainer from "../Container/ExerciseContainer";
import { Switch, Route, Link } from "react-router-dom";
// import { connect } from "react-redux";
class PartOfTheBodyCard extends React.Component {
  // renderExercise() {
  //   return this.props.body.exercises.map(exercise => {
  //     console.log("hi");
  //     return <ExerciseContainer exercise={exercise} />;
  //   });

  // onClick={() => this.renderExercise()}
  render() {
    // console.log(this.props.body.exercises);
    return (
      <div>
        <Link to="/exercises">
          <h1>{this.props.body.body_name}</h1>
        </Link>
        <img src={this.props.body.picture_url} />
        <ExerciseContainer exercises={this.props.body.exercises} />
      </div>
    );
  }
}

export default PartOfTheBodyCard;
