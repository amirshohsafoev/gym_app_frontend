import React, { Component } from "react";
// import logo from "./logo.svg";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import "./App.css";
// import { connect } from "react-redux";
import { Route, Switch, Link, withRouter } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import { getBodies } from "./Action/bodyActions";
// import SideBar from "./Form/Sidebar";
import LogInForm from "./Form/LogInForm";
import PartOfTheBodyContainer from "./Container/PartOfTheBodyContainer";
import ExerciseContainer from "./Container/ExerciseContainer";
import CreateUserForm from "./Form/CreateUserForm";
class App extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  //   componentDidMount() {
  //     this.props.getBodies();
  //   }
  render() {
    // console.log(this.props.bodies);
    const { activeItem } = this.state;
    return (
      <div>
        <Menu size="tiny">
          <Link to="/">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/bodyparts">
            <Menu.Item
              name="Body Parts"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/createuser">
            <Menu.Item
              name="Sign up"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
          </Link>

          <Menu.Menu position="right">
            <Dropdown item text="Do not know yet">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/signin">
              <Menu.Item>
                <Button primary>Sign In</Button>
              </Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>
        <h1>My App</h1>
        <Switch>
          <Route path="/bodyparts" component={PartOfTheBodyContainer} />
          <Route path="/exercises" component={ExerciseContainer} />
          <Route
            path="/signin"
            render={() => {
              return <LogInForm />;
            }}
          />
          <Route path="/createuser" component={CreateUserForm} />
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
