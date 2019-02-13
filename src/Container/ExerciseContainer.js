import React from "react";
// import { Container, Col, Row } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import ExerciseCard from "../Card/ExerciseCards";
class ExerciseContainer extends React.Component {
  renderExercise = () => {
    if (this.props.bodyExercises.exercises !== undefined) {
      return this.props.bodyExercises.exercises.map(exercise => (
        <Grid.Column width={4}>
          <ExerciseCard exercise={exercise} key={exercise.id} />
        </Grid.Column>
      ));
    }
  };
  render() {
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

export default ExerciseContainer;
