import { combineReducers } from "redux";
import postReducer from "./posts/PostReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});

export default rootReducer;
