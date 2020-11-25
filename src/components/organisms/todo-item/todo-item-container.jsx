import { connect } from "react-redux";
import { TodoItem } from "./todo-item";
import { toggleTodoAsync, deleteTodoAsync } from "store/actions";

/**
* @todo: add loadingTodoId state to store

* @todo: add thunk action toggleTodo

* @todo: add thunk action removeTodo
 */
const mapStateToProps = (state) => ({
  // loadingTodoId: ...
});

const mapDispatchToProps = {
  toggleTodoAction: toggleTodoAsync,
  deleteTodoAction: deleteTodoAsync,
};

export const TodoItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
