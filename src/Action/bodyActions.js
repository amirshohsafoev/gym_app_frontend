export const LOAD_BODIES = "LOAD_BODIES";
export const FILTER_EXERCISES = "FILTER_EXERCISES";

export const getBodies = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/part_of_the_bodies")
      .then(res => res.json())
      .then(bodies => {
        dispatch({
          type: LOAD_BODIES,
          payload: bodies
        });
      })
      .catch(console.error);
  };
};

export const filterExercises = chosen_body => {
  return {
    type: FILTER_EXERCISES,
    payload: chosen_body
  };
};
