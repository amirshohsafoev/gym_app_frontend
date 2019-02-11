export const LOAD_USER = "LOAD_USER";

export const getUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/current_user", {
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(user => {
        dispatch({
          type: LOAD_USER,
          payload: user
        });
      })
      .catch(console.error);
  };
};
