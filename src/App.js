import React, { Component } from "react";
import "./App.css";

import { getBodies } from "./Action/bodyAction";
import { getUser } from "./Action/userAction";
import { Route, Switch, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import { Button, Dropdown, Menu } from "semantic-ui-react";

import LogInForm from "./Form/LogInForm";
import NavBar from "./Form/NavBar";
import PartOfTheBodyContainer from "./Container/PartOfTheBodyContainer";
import ExerciseContainer from "./Container/ExerciseContainer";
import UserExerciseContainer from "./Container/UserExerciseContainer";
import Home from "./Container/Home";
import UserContainer from "./Container/UserContainer";
import Calendar from "./Container/Calendar";

import CreateUserForm from "./Form/CreateUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getBodies();
    this.props.getUser();
  }
  // componentDidMount() {
  //   // grab token from localstorage
  //   // send request to backend with token in the authorization header
  //   // the backend will authenticate the user and then send back the user object.
  //   // dispatch a redux action to update the store with the user object that was
  //   // returned to the frontend.
  // }

  checkAuth = () => {
    if (localStorage.getItem("token") !== null) {
      return <Home />;
    } else {
      return <Redirect to="/signin" />;
    }
  };
  clearAuth = () => {
    localStorage.clear();
    return <Redirect to="/signin" />;
  };
  //

  render() {
    console.log(localStorage.getItem("token"));
    // console.log(this.props.user_exercises);
    console.log(this.props.user.user_exercises);
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/calendar" render={() => <Calendar />} />
          <Route exact path="/createuser" render={() => <CreateUserForm />} />
          <Route
            exact
            path="/userexercises"
            render={() => (
              <UserExerciseContainer
                myExercises={this.props.user.user_exercises}
              />
            )}
          />
          <Route
            exact
            path="/bodyparts"
            render={() => <PartOfTheBodyContainer bodies={this.props.bodies} />}
          />
          <Route
            exact
            path="/exercises"
            render={() => (
              <ExerciseContainer bodyExercises={this.props.chosen_body} />
            )}
          />
          <Route
            exact
            path="/userpage"
            render={() => <UserContainer user={this.props.user} />}
          />
          <Route exact path="/signout" render={() => this.clearAuth()} />
          <Route exact path="/signin" render={() => <LogInForm />} />
          <Route exact path="/" render={() => this.checkAuth()} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bodies: state.bodies,
    chosen_body: state.chosen_body,
    user: state.user,
    user_exercises: state.user_exercises
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getUser: bindActionCreators(getUser, dispatch),
    getBodies: bindActionCreators(getBodies, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
