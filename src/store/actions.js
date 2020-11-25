import { fetchTodos } from "api/fetch-todos";

/**
 * @todo add async action for add todo
 * @todo add async action for delete todo
 * @todo add async action for update todo (completed key only)
 * */ 
 
/** action types */
export const INIT = "todos/init";
export const FETCH_TODOS_SUCCESS = "todos/fetch-todos-success";
export const FETCH_TODOS_REQUEST = "todos/fetch-todos-request";
export const FETCH_TODOS_FAILURE = "todos/fetch-todos-failure";

/** action creators */
export const initTodos = () => (dispatch) => {
  dispatch(fetchTodosAsync());

  return {
    type: INIT,
  };
};

export const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodosFailure = (e) => ({
  type: FETCH_TODOS_FAILURE,
  payload: e,
});

export const fetchTodosAsync = () => async (dispatch) => {
  dispatch(fetchTodosRequest());

  try {
    const todos = await fetchTodos();
    dispatch(fetchTodosSuccess(todos));
  } catch (e) {
    console.error(e);
    dispatch(fetchTodosFailure(e.message));
  }
};

export const toggleTodoAsync = () => async (dispatch) => {};

export const deleteTodoAsync = () => async (dispatch) => {};


