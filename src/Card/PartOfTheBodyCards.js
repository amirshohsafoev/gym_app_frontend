import React from "react";
import ExerciseContainer from "../Container/ExerciseContainer";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { filterExercises } from "../Action/bodyActions";
import { connect } from "react-redux";

class PartOfTheBodyCard extends React.Component {
  // sendExercise = () => {
  //   if (this.props.body.exercises !== undefined) {
  //     return <ExerciseContainer exercises={this.props.body.exercises} />;
  //   }
  // };
  handleClick = () => {
    this.props.filterExercises(this.props.body);
    // console.log(this.props.body);
  };
  // onClick={() => this.renderExercise()}
  render() {
    // console.log(this.props.body.exercises);
    return (
      <div>
        <NavLink to="/exercises">
          <h1 onClick={this.handleClick}>{this.props.body.body_name}</h1>
        </NavLink>
        <img src={this.props.body.picture_url} />
      </div>
    );
  }

  sendToExerciseContainer = e => {
    console.log("body card", e.target);
    return (
      <Redirect
        to={{
          pathname: "/exercises",
          state: { from: this.props.body.exercises }
        }}
      />
    );
  };
}

export default connect(
  null,
  { filterExercises }
)(PartOfTheBodyCard);
