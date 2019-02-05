import React, { Component } from "react";
// import logo from "./logo.svg";
import PartOfTheBodyContainer from "./Container/PartOfTheBodyContainer";
import "./App.css";
// import { connect } from "react-redux";
import { Route, Switch, Link, withRouter } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import { getBodies } from "./Action/bodyActions";
// import SideBar from "./Form/Sidebar";

class App extends Component {
  //   componentDidMount() {
  //     this.props.getBodies();
  //   }
  render() {
    // console.log(this.props.bodies);
    return (
      <div>
        <h1>My App</h1>
        <Link to="/bodyparts">
          <button />
        </Link>
        <Switch>
          <Route path="/bodyparts" render={() => <PartOfTheBodyContainer />} />
        </Switch>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   return {
//     bodies: state.bodies
//     // day: state.hello
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     getBodies: bindActionCreators(getBodies, dispatch)
//   };
// }

export default App;
// export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(App)
// );
