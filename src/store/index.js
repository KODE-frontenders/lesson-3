import { createStore, applyMiddleware } from "redux";
import { composeEnhancers } from "./utils";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

/**  compose enhancers (Redux Dev Tools, ...) with middlewares (Redux Thunk, ...) */
const enhancer = composeEnhancers(applyMiddleware(thunk));

/**  create store */
const store = createStore(rootReducer, {}, enhancer);

/**  export store singleton instance */
export default store;
