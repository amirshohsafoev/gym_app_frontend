import React from "react";
import UserExerciseCard from "../Card/UserExerciseCards";
// import { bindActionCreators } from "redux";
// import { getUserExercises } from "../Action/userExerciseAction";
// import { connect } from "react-redux";

class UserExerciseContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getUserExercises();
  // }
  renderUserExercise = () => {
    if (this.props.myExercises !== undefined) {
      return this.props.myExercises.map(exercise => (
        <UserExerciseCard exercise={exercise} key={exercise.id} />
      ));
    }
  };
  render() {
    // console.log("bla bla bla", this.renderUserExercise);
    return (
      <div>
        <h1>User Exercises</h1>
        {this.renderUserExercise()}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     user_exercises: state.user_exercises
//     // day: state.hello
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     getUserExercises: bindActionCreators(getUserExercises, dispatch)
//   };
// }

export default UserExerciseContainer;
// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )();
