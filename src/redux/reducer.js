import { LOAD_BODIES, FILTER_EXERCISES } from "../Action/bodyAction";
import { LOAD_USER_EXERCISES } from "../Action/userExerciseAction";
import { LOAD_USER } from "../Action/userAction";
const initialState = {
  bodies: [],
  chosen_body: [],
  user: [],
  user_exercises: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BODIES: {
      return { ...state, bodies: action.payload };
    }
    case FILTER_EXERCISES: {
      return { ...state, chosen_body: action.payload };
    }
    case LOAD_USER: {
      return { ...state, user: action.payload };
    }
    case LOAD_USER_EXERCISES: {
      return { ...state, user_exercises: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
