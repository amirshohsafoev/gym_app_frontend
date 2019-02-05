import React, { Component } from "react";
// import logo from "./logo.svg";
import PartOfTheBodyContainer from "./Container/PartOfTheBodyContainer";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getBodies } from "./Action/bodyActions";
// import SideBar from "./Form/Sidebar";

class App extends Component {
  componentDidMount() {
    this.props.getBodies();
  }
  render() {
    return (
      <div>
        <h1>My App</h1>
        <PartOfTheBodyContainer />
      </div>
    );
  }
}
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
