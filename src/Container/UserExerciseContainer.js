import React from "react";

import { bindActionCreators } from "redux";
import { getUserExercises } from "../Action/userExerciseAction";
import { connect } from "react-redux";

class UserExerciseContainer extends React.Component {
  componentDidMount() {
    this.props.getUserExercises();
  }
  render() {
    // console.log("bla bla bla", this.props.userexercises);
    return (
      <div>
        <h1>User Exercises</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user_exercises: state.user_exercises
    // day: state.hello
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getUserExercises: bindActionCreators(getUserExercises, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserExerciseContainer);
