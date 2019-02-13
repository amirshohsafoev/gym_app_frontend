export const LOAD_USER_EXERCISES = "LOAD_USER_EXERCISES";
export const UPDATE_EXERCISE_SUCCESS = "UPDATE_EXERCISE_SUCCESS";
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

export function updateExerciseSuccess(exercise) {
  return { type: UPDATE_EXERCISE_SUCCESS, payload: exercise };
}

export const updateUserExercise = exercise => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/user_exercises/${exercise.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({ user_exercise: exercise })
    })
      .then(res => res.json())
      .then(res => {
        dispatch(updateExerciseSuccess(res));
      })
      .catch(error => {
        throw error;
      });
  };
};
