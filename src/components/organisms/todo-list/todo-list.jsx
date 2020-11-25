import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TodoItemContainer } from "components/organisms/todo-item/todo-item-container";
import { TTodos } from "shared/types";
import { ReactComponent as TodosSkeleton } from "shared/icons/todos-skeleton.svg";


const StyledSkeleton = styled(TodosSkeleton)`
  color: ${({ theme }) => theme.colors.gray};
`;

const renderTodoItem = (t) => <TodoItemContainer todo={t} key={t._id} />;

/**
 * @param todos {todo[]} список тудушек
 * @param isLoading {boolean} состояние загрузки тудушек
 * @param ititTodos {func} thunk action для инициализации тудушек
 */
export const TodoList = ({ todos, isLoading, initTodos }) => {
  React.useEffect(() => {
    initTodos();
  }, [initTodos]);

  if (isLoading) {
    return <StyledSkeleton />;
  }

  if (todos.length === 0) {
    return <p>Nothing here 🤷‍♂️</p>;
  }

  return <ul>{todos.map(renderTodoItem)}</ul>;
};

TodoList.propTypes = {
  initTodos: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  todos: TTodos,
};

TodoList.defaultProps = {
  todos: [],
  isLoading: false,
};
