import React from "react";
import PartOfTheBodyCards from "../Card/PartOfTheBodyCards";

class PartOfTheBodyContainer extends React.Component {
  renderBodies = () => {
    if (this.props.bodies !== undefined) {
      return this.props.bodies.map(body => (
        <PartOfTheBodyCards body={body} key={body.id} />
      ));
    }
  };
  render() {
    return (
      <div>
        <h1>Muscle Groups</h1>
        {this.renderBodies()}
      </div>
    );
  }
}

export default PartOfTheBodyContainer;
