import { createSelector } from "reselect";

const getTodosState = (state) => {
  console.log(
    "🚀 ~ file: selectors.js ~ line 7 ~ getTodosState ~ state",
    state
  );
  return state.todos;
};

/**
 * selector example
 * reselect docs: https://github.com/reduxjs/reselect
 */
export const getTodosItems = createSelector(
  getTodosState,
  (todos) => todos.items
);
