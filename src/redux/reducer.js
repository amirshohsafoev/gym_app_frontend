import { LOAD_BODIES, FILTER_EXERCISES } from "../Action/bodyAction";
import {
  LOAD_USER_EXERCISES,
  UPDATE_EXERCISE_SUCCESS
} from "../Action/userExerciseAction";
import { LOAD_USER, UPDATE_USER_SUCCESS } from "../Action/userAction";
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
    case UPDATE_USER_SUCCESS: {
      return { ...state, user: action.payload };
    }
    case LOAD_USER_EXERCISES: {
      return { ...state, user_exercises: action.payload };
    }
    case UPDATE_EXERCISE_SUCCESS: {
      return {
        ...state,
        user_exercises: [
          ...state.user_exercises.filter(
            exercise => exercise.id !== action.exercise.id
          ),
          Object.assign({}, action.exercise)
        ]
      };
    }
    default:
      return state;
  }
};

export default reducer;
