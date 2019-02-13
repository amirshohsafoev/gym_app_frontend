import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
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
    console.log("traliki uje ne xodyat");
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
            <Card.Meta>You can add in your schedule</Card.Meta>
            <Card.Description>Will add some description</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Modal
              </Button>
              <Button basic color="red">
                Modal
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    } else {
      // console.log(this.props.body.exercises);
      return (
        <Card>
          <Image src={this.props.body.picture_url} />
          <Card.Content>
            <Card.Header>{this.props.body.body_name}</Card.Header>
            <Card.Meta>You can add in your schedule</Card.Meta>
            <Card.Description>Will add some description</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to="/exercises">
              <Button basic color="red">
                Modal
              </Button>
            </Link>
          </Card.Content>
        </Card>
      );
    }
  }
  // <div>
  //
  //     <h1 >{this.props.body.body_name}</h1>
  //
  //   <img
  //     src={this.props.body.picture_url}
  //     alt={this.props.body.picture_url}
  //   />
  // </div>
  // sendToExerciseContainer = e => {
  //   console.log("body card", e.target);
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: "/exercises",
  //         state: { from: this.props.body.exercises }
  //       }}
  //     />
  //   );
  // };
}

export default connect(
  null,
  { filterExercises }
)(PartOfTheBodyCard);
