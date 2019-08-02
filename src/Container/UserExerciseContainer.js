import React from "react";
import UserExerciseCard from "../Card/UserExerciseCards";
import { Grid } from "semantic-ui-react";

// import { bindActionCreators } from "redux";
// import { getUserExercises } from "../Action/userExerciseAction";
// import { connect } from "react-redux";

class UserExerciseContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getUserExercises();
  // }

  renderUserExercise = () => {
    if (this.props.myExercises !== undefined) {
      console.log(this.props.myExercises, "this updated too");
      return this.props.myExercises.map(exercise => (
        <Grid.Column width={4}>
          <UserExerciseCard exercise={exercise} key={exercise.id} />
        </Grid.Column>
      ));
    }
  };

  componentDidUpdate(prevProp) {
    console.log("this did update");
    this.renderUserExercise();
  }
  render() {
    // console.log("bla bla bla", this.renderUserExercise);
    return (
      <div>
        <Grid divided="vertically">
          <Grid.Row stretched>{this.renderUserExercise()}</Grid.Row>
        </Grid>
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
