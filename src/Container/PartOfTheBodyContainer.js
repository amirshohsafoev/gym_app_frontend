import React from "react";
import PartOfTheBodyCards from "../Card/PartOfTheBodyCards";

import { connect } from "react-redux";

class PartOfTheBodyContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Part Container</h1>
        <PartOfTheBodyCards />
      </div>
    );
  }
}

// const someFunction = connect();
// const someComponent(PartOfTheBodyContainer);
//Return value of the function will be mapped to props
const mapStateToProps = state => {
  return {
    hello: "monday"
  };
};

export default connect(mapStateToProps)(PartOfTheBodyContainer);
