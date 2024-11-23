import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";  // Named import
import { postsReducer } from "./postsReducer";  // Named import

export default combineReducers({
  errors: errorReducer,
  posts: postsReducer
});
