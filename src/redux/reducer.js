import { LOAD_BODIES, FILTER_EXERCISES } from "../Action/bodyAction";
import {
  CREATE_USER_EXERCISE,
  LOAD_USER_EXERCISES,
  UPDATE_EXERCISE_SUCCESS
} from "../Action/userExerciseAction";
import {
  CREATE_USER,
  LOAD_USER,
  UPDATE_USER_SUCCESS
} from "../Action/userAction";
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
    case CREATE_USER: {
      // let newArr = [...state.user, action.payload]
      return { ...state, user: action.payload };
    }
    case LOAD_USER: {
      return { ...state, user: action.payload };
    }
    case UPDATE_USER_SUCCESS: {
      return { ...state, user: action.payload };
    }
    case CREATE_USER_EXERCISE: {
      let newArr = [...state.user_exercises];
      if (newArr.includes(action.payload)) {
        newArr = [...state.user_exercises];
      } else {
        // console.log(state, "break", action.payload);
        newArr = [...state.user.user_exercises, action.payload];
      }
      console.log(newArr, "testtestest");
      return { ...state, user: { ...state.user, user_exercises: newArr } };
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
