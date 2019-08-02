import React from "react";
import { createUserExercise } from "../Action/userExerciseAction";
import { connect } from "react-redux";

// import { Card, Button, Collapse } from "react-bootstrap";
import { Card, Icon, Image, Button } from "semantic-ui-react";
class ExerciseCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      reps: this.props.exercise.base_reps,
      sets: this.props.exercise.base_sets,
      weight: this.props.exercise.base_weight,
      exercise_id: this.props.exercise.id,
      user_id: this.props.user.id
    };
  }

  render() {
    // const { open } = this.state;
    let { exercise } = this.props;
    // console.log("exercise id", exercise.id);
    // console.log("user id", this.props.user.id);
    return (
      <Card color="red">
        <Image src={exercise.picture1_url} className="cardImage" />
        <Card.Content>
          <Card.Header>{exercise.exercise_name}</Card.Header>
          <Card.Description>
            Recommended reps: {exercise.base_reps}
          </Card.Description>
          <Card.Description>
            Recommended sets: {exercise.base_sets}
          </Card.Description>
          <Card.Description>
            Recommended wight: {exercise.base_weight}
          </Card.Description>
          <Card.Meta>{exercise.description}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="fire" />
            You are on fire
          </a>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green" onClick={this.handleSubmit}>
              Add
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
  handleSubmit = e => {
    // console.log("exercise card state", this.state);
    e.preventDefault();
    this.props.createUserExercise(this.state);
  };
}

export default connect(
  null,
  { createUserExercise }
)(ExerciseCard);
