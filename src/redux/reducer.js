import { LOAD_BODIES } from "../Action/bodyActions";
const initialState = {
  // hello: "friday",
  bodies: []
};

const reducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case LOAD_BODIES: {
      return { ...state, bodies: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
