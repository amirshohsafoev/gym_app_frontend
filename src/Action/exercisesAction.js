export const LOAD_BODY_EXERCISES = "LOAD_BODY_EXERCISES";

export const getBodyExercises = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/exercises")
      .then(res => res.json())
      .then(exercises => {
        dispatch({
          type: LOAD_BODY_EXERCISES,
          payload: exercises
        });
      })
      .catch(console.error);
  };
};
