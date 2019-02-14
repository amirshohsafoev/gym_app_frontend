import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// import { Container, Col, Row } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import ExerciseCard from "../Card/ExerciseCards";
class ExerciseContainer extends React.Component {
  renderExercise = () => {
    if (this.props.bodyExercises.exercises !== undefined) {
      return this.props.bodyExercises.exercises.map(exercise => (
        <Grid.Column width={4}>
          <ExerciseCard
            exercise={exercise}
            key={exercise.id}
            user={this.props.user}
          />
        </Grid.Column>
      ));
    }
  };
  render() {
    // console.log("exercise container", this.props.user);
    // let { exercises } = this.props.bodyExercises;
    // console.log("my exercises", exercises);
    // let exercise = exercises.map(exercise => <ExerciseCard exercise={exercise} key={exercise.id}/>)
    return (
      <div>
        <Grid divided="vertically">
          <Grid.Row stretched>{this.renderExercise()}</Grid.Row>
        </Grid>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    null,
    null,
    {
      pure: false
    }
  )(ExerciseContainer)
);
