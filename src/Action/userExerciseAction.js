export const LOAD_USER_EXERCISES = "LOAD_USER_EXERCISES";
export const UPDATE_EXERCISE_SUCCESS = "UPDATE_EXERCISE_SUCCESS";
export const CREATE_USER_EXERCISE = "CREATE_USER_EXERCISE";

export const createUserExercise = exercise => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/user_exercises", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        reps: exercise.reps,
        sets: exercise.sets,
        weight: exercise.weight,
        exercise_id: exercise.exercise_id,
        user_id: exercise.user_id
      })
    })
      .then(res => res.json())
      .then(user_exercise => {
        console.log(user_exercise);
        dispatch({
          type: CREATE_USER_EXERCISE,
          payload: user_exercise
        });
        // console.log(data);
      })
      .catch(error => {
        throw error;
      });
  };
};

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

export function updateExerciseSuccess(user_exercises) {
  return { type: UPDATE_EXERCISE_SUCCESS, payload: user_exercises };
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
      .then(userexercises => {
        dispatch(updateExerciseSuccess(userexercises));
      })
      .catch(error => {
        throw error;
      });
  };
};
