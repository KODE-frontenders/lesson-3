import React from "react";
import { PageTemplate } from "components/templates/page/page";
import { TodoListContainer } from "components/organisms/todo-list/todo-list-container";
import { TodosAdd } from "components/organisms/todos-add/todos-add";

export const TodosPage = () => {
  return (
    <PageTemplate title="Toduber" linkTo="settings">
      <TodoListContainer />
      <TodosAdd />
    </PageTemplate>
  );
};