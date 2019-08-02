import React from "react";
import { withRouter } from "react-router";
import { Card, Icon, Image, Button, Segment } from "semantic-ui-react";
// import ExerciseContainer from "../Container/ExerciseContainer";
import { NavLink, Link } from "react-router-dom";
import { filterExercises } from "../Action/bodyAction";
import { connect } from "react-redux";

class PartOfTheBodyCard extends React.Component {
  // sendExercise = () => {
  //   if (this.props.body.exercises !== undefined) {
  //     return <ExerciseContainer exercises={this.props.body.exercises} />;
  //   }
  // };
  handleClick = () => {
    console.log("i am getting chosen_exercise");
    return this.props.filterExercises(this.props.body);
  };
  // onClick={() => this.renderExercise()}
  render() {
    if (this.props.parent === "calendar") {
      return (
        <Card>
          <Image src={this.props.body.picture_url} />

          <Card.Content>
            <Card.Header>{this.props.body.body_name}</Card.Header>
            {/*<Card.Meta>You can add in your schedule</Card.Meta>
            <Card.Description>Will add some description</Card.Description>*/}
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="add to calendar" />
              Add in your schedule
            </a>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Link to="/exercises">
                <Button inverted color="black" onClick={this.handleClick}>
                  see
                </Button>
                <Button inverted color="grey" onClick={this.handleClick}>
                  exercises
                </Button>
              </Link>
            </div>
          </Card.Content>
        </Card>
      );
    } else {
      return (
        <Card>
          <Image src={this.props.body.picture_url} />
          <Card.Content>
            <Card.Header>{this.props.body.body_name}</Card.Header>
            {/*<Card.Meta>You can add in your schedule</Card.Meta>
            <Card.Description>Will add some description</Card.Description>*/}
          </Card.Content>
          <Card.Content extra>
            <Link to="/exercises">
              <Button color="grey" onClick={this.handleClick}>
                See exercises
              </Button>
            </Link>
          </Card.Content>
        </Card>
      );
    }
  }
}

export default withRouter(
  connect(
    null,
    { filterExercises }
  )(PartOfTheBodyCard)
);
