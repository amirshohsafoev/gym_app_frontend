import React, { Component } from "react";
import "./App.css";

import { getBodies } from "./Action/bodyAction";
import { getUser } from "./Action/userAction";
import { Route, Switch, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import { Button, Dropdown, Menu } from "semantic-ui-react";
import UserSchedule from "./Container/UserSchedule";
import LogInForm from "./Form/LogInForm";
import NavBar from "./Form/NavBar";
import PartOfTheBodyContainer from "./Container/PartOfTheBodyContainer";
import ExerciseContainer from "./Container/ExerciseContainer";
import UserExerciseContainer from "./Container/UserExerciseContainer";
import Home from "./Container/Home";
import UserContainer from "./Container/UserContainer";
import Calendar from "./Container/Calendar";
import { withRouter } from "react-router";

import CreateUserForm from "./Form/CreateUserForm";

const PrivateRoute = ({ component: Component, render, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") === null ? (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      ) : render ? (
        render()
      ) : (
        <Component {...props} />
      )
    }
  />
);

class App extends Component {
  // constructor(props) {
  //   super(props);

  // }
  componentDidMount() {
    // grab token from localstorage
    // send request to backend with token in the authorization header
    // the backend will authenticate the user and then send back the user object.
    // dispatch a redux action to update the store with the user object that was
    // returned to the frontend.
    this.props.getBodies();
    this.props.getUser();
  }

  // componentDidUpdate(prevProps) {
  //   this.fetchData(this.props.user.user_exercises);
  // }

  clearAuth = () => {
    localStorage.clear();
    return <Redirect to="/signin" />;
  };
  //

  render() {
    // console.log(localStorage.getItem("token"));
    // console.log(this.props.user_exercises);
    // console.log(this.props.user.user_exercises, "user updated");
    return (
      <div className="something">
        <NavBar />
        <Switch>
          <PrivateRoute
            exact
            path="/userschedule"
            render={() => <UserSchedule />}
          />
          <PrivateRoute
            exact
            path="/calendar"
            render={() => (
              <Calendar bodies={this.props.bodies} key={this.props.bodies} />
            )}
          />
          <Route exact path="/createuser" render={() => <CreateUserForm />} />
          <PrivateRoute
            exact
            path="/userexercises"
            render={() => (
              <UserExerciseContainer
                myExercises={this.props.user.user_exercises}
              />
            )}
          />
          <PrivateRoute
            exact
            path="/bodyparts"
            render={() => <PartOfTheBodyContainer bodies={this.props.bodies} />}
          />
          <PrivateRoute
            exact
            path="/exercises"
            render={() => (
              <ExerciseContainer bodyExercises={this.props.chosen_body} />
            )}
          />
          <PrivateRoute
            exact
            path="/userpage"
            render={() => <UserContainer user={this.props.user} />}
          />
          <Route exact path="/signout" render={() => this.clearAuth()} />
          <Route exact path="/signin" render={() => <LogInForm />} />
          <PrivateRoute exact path="/" render={() => <Home />} />
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {
      pure: false
    }
  )(App)
);
