import React from "react";
// , { PropTypes }
import EditExerciseForm from "../Form/EditExerciseForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from "semantic-ui-react";
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
    console.log(this.props.userexercises);
    const { open } = this.state;
    let { exercise } = this.props;
    if (this.state.isEditing) {
      return (
        <div>
          <Button
            onClick={this.toggleEdit}
            labelPosition="left"
            icon="left chevron"
            content="Back"
            size="small"
          />
          <EditExerciseForm
            exercise={this.state.exercise}
            onSave={this.saveExercise}
            onChange={this.updateExerciseState}
          />
        </div>
      );
    } else {
      return (
        <Card color="red">
          <Image src={exercise.exercise.picture1_url} className="cardImage" />
          <Card.Content>
            <Card.Header>{exercise.exercise._name}</Card.Header>
            <div id="example-collapse-text">
              <Card.Description>Reps: {exercise.reps}</Card.Description>
              <Card.Description>Sets: {exercise.sets}</Card.Description>
              <Card.Description>Weight: {exercise.weight}</Card.Description>
              <Card.Meta>{exercise.exercise.description}</Card.Meta>
            </div>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button color="violet" onClick={this.toggleEdit}>
                Edit
              </Button>
              <Link to="/bodyparts">
                <Button color="blue">More Info</Button>
              </Link>
            </div>
          </Card.Content>
        </Card>
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
    // getUserExercises: bindActionCreators(getUserExercises, dispatch)
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(UserExerciseCard)
);
