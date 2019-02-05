import React from "react";
import PartOfTheBodyCards from "../Card/PartOfTheBodyCards";
import { bindActionCreators } from "redux";
import { getBodies } from "../Action/bodyActions";
import { connect } from "react-redux";

class PartOfTheBodyContainer extends React.Component {
  componentDidMount() {
    this.props.getBodies();
  }
  render() {
    console.log(this.props.bodies);
    return (
      <div>
        <h1>Part Container</h1>
        {this.props.bodies.map(body => (
          <PartOfTheBodyCards body={body} key={body.id} />
        ))}
      </div>
    );
  }
}

// const someFunction = connect();
// const someComponent(PartOfTheBodyContainer);
//Return value of the function will be mapped to props
function mapStateToProps(state) {
  return {
    bodies: state.bodies
    // day: state.hello
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getBodies: bindActionCreators(getBodies, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartOfTheBodyContainer);
