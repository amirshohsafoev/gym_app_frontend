export const LOAD_USER_EXERCISES = "LOAD_USER_EXERCISES";

export const getUserExercises = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/user_exercises")
      .then(res => res.json())
      .then(user_exercises => {
        dispatch({
          type: LOAD_USER_EXERCISES,
          payload: user_exercises
        });
      })
      .catch(console.error);
  };
};
