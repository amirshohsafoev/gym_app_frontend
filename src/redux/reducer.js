import { LOAD_BODIES } from "../Action/bodyActions";
import { LOAD_USER_EXERCISES } from "../Action/userExerciseAction";
import { FILTER_EXERCISES } from "../Action/bodyActions";

const initialState = {
  // hello: "friday",
  chosen_body: [],
  bodies: [],
  user_exercises: []
};

const reducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case LOAD_BODIES: {
      return { ...state, bodies: action.payload };
    }
    case LOAD_USER_EXERCISES: {
      return { ...state, user_exercises: action.payload };
    }
    case FILTER_EXERCISES: {
      return { ...state, chosen_body: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
