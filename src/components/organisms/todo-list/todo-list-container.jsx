import { connect } from "react-redux";
import { TodoList } from "./todo-list";
import { initTodos } from "store/actions";
import { getTodosItems } from "store/selectors";

/**
 * @todo: add isLoading state to store
 * isLoading:
 *
 * @todo: add loadingTodoId state to store
 * loadingTodoId:
 */
const mapStateToProps = (state) => ({
  todos: getTodosItems(state),
});

const mapDispatchToProps = {
  initTodos,
};

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
