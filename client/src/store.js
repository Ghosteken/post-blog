import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

// Middleware
const middleware = [thunk];

// Create the store with the rootReducer, initialState, and middleware
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // If you want to add the Redux DevTools extension support, you can enable it here
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
