import React from "react";
import PartOfTheBodyCards from "../Card/PartOfTheBodyCards";
import { Grid } from "semantic-ui-react";

class PartOfTheBodyContainer extends React.Component {
  renderBodies = () => {
    if (this.props.bodies !== undefined) {
      console.log("Body container", this.props.bodies);
      return this.props.bodies.map(body => (
        <Grid.Column width={4}>
          <PartOfTheBodyCards body={body} key={body.id} />
        </Grid.Column>
      ));
    }
  };
  render() {
    return (
      <div>
        <Grid divided="vertically">
          <Grid.Row stretched>{this.renderBodies()}</Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default PartOfTheBodyContainer;
