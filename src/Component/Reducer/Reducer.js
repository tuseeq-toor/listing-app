import { combineReducers } from "redux";
// login Reducer
const logIn = (state = { payload: "" }, action) => {
  if (action.type === "Login") {
    return { ...state, payload: action.data };
  }

  return state;
};

// login Reducer
const userInfo = (state = { payload: "" }, action) => {
  if (action.type === "UserInfo") {
    return { ...state, payload: action.data };
  }

  return state;
};

const allreducers = combineReducers({
  logIn,
  userInfo
});
export default allreducers;
