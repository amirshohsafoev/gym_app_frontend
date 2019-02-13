import React from "react";
// , { PropTypes }
import EditExerciseForm from "../Form/EditExerciseForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Card, Button, Collapse } from "react-bootstrap";
import { updateUserExercise } from "../Action/userExerciseAction";

class UserExerciseCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      isEditing: false,
      exercise: this.props.exercise
    };
    this.updateExerciseState = this.updateExerciseState.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  updateExerciseState(event) {
    const field = event.target.name;
    const exercise = this.state.exercise;
    exercise[field] = event.target.value;
    return this.setState({ exercise: exercise });
  }

  saveExercise(event) {
    event.preventDefault();
    this.props.actions(this.state.exercise);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.exercise.id != nextProps.exercise.id) {
  //     this.setState({ exercise: nextProps.exercise });
  //   }
  // }

  render() {
    const { open } = this.state;
    let { exercise } = this.props;
    if (this.state.isEditing) {
      return (
        <div>
          <h1>edit exercise</h1>
          <button onClick={this.toggleEdit}>go back</button>
          <EditExerciseForm
            exercise={this.state.exercise}
            onSave={this.saveExercise}
            onChange={this.updateExerciseState}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={exercise.exercise.picture1_url} />
            <Card.Body>
              <Card.Title>{exercise.exercise._name}</Card.Title>
              <Card.Text />
              <button onClick={this.toggleEdit}>edit</button>
              <Button
                onClick={() => this.setState({ open: !open })}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                More Information
              </Button>
              <Collapse in={this.state.open}>
                <div id="example-collapse-text">
                  <li>Reps: {exercise.reps}</li>
                  <li>Sets: {exercise.sets}</li>
                  <li>Weight: {exercise.weight}</li>
                  <li>{exercise.exercise.description}</li>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
}

// function mapStateToProps(state, ownProps) {
//   // let exercise = { reps: "", sets: "", weight: "" };
//   // const exerciseId = ownProps.params || {};
//   // if (exerciseId && state.exercises.length > 0) {
//   //   exercise = getExerciseById(state.exercises, ownProps.params.id);
//   // }
//   return {
//     exercise: state.exercise
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(updateUserExercise, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(UserExerciseCard);
