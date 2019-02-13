import React from "react";
import { Card, Button, Collapse } from "react-bootstrap";

class UserExerciseCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  render() {
    const { open } = this.state;
    let { exercise } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={exercise.exercise.picture1_url} />
          <Card.Body>
            <Card.Title>{exercise.exercise._name}</Card.Title>
            <Card.Text />
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

export default UserExerciseCard;
