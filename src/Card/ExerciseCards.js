import React from "react";
// import { Card, Button, Collapse } from "react-bootstrap";
import { Card, Icon, Image, Button } from "semantic-ui-react";
class ExerciseCard extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  //
  //   this.state = {
  //     open: false
  //   };
  // }

  render() {
    // const { open } = this.state;
    let { exercise } = this.props;
    // console.log(exercise);
    return (
      <Card color="red">
        <Image src={exercise.picture1_url} className="cardImage" />
        <Card.Content>
          <Card.Header>{exercise.exercise_name}</Card.Header>
          <Card.Meta>Recommended reps: {exercise.base_reps}</Card.Meta>
          <Card.Meta>Recommended sets: {exercise.base_sets}</Card.Meta>
          <Card.Meta>Recommended wight: {exercise.base_weight}</Card.Meta>
          <Card.Description>{exercise.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="fire" />
            You are on fire
          </a>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
export default ExerciseCard;
