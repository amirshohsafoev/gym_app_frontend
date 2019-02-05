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
  // }
  // onClick={() => this.renderExercise()}
  render() {
    return (
      <div>
        <h1>{this.props.body.body_name}</h1>
        <Link to="/">
          <img src={this.props.body.picture_url} />
        </Link>
        <Switch>
          <Route
            exact
            path="/exercises"
            render={() => (
              <ExerciseContainer exercises={this.props.body.exercise} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default PartOfTheBodyCard;
