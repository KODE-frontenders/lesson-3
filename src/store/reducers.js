import { combineReducers } from "redux";
import { FETCH_TODOS_SUCCESS } from "./actions";

/**
* @todo add isLoadingReducer for todos
* @todo add loadingTodoIdReducer for todos
*/

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS: {
      const items = action.payload;
      return [ ...state, ...items ];
    }
    default:
      return state;
  }
};

const todosReducer = combineReducers({
  items: itemsReducer,
  // isLoading: ...
  // loadingTodoId: ...
});

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
