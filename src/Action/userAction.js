export const LOAD_USER = "LOAD_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";

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

export function updateUserSuccess(user) {
  return { type: UPDATE_USER_SUCCESS, payload: user };
}

export const updateUser = user => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({ user: user })
    })
      .then(res => res.json())
      .then(res => {
        dispatch(updateUserSuccess(res));
      })
      .catch(error => {
        throw error;
      });
  };
};
