import React from "react";
import { Provider } from "react-redux";

import { storeMock } from "store/store-mock";
import { TodoList } from "./todo-list";


export default {
  title: "Organisms/TodoList",
  component: TodoList,
  decorators: [
    (Story) => (
      <Provider store={storeMock}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
};

const Template = (args) => <TodoList {...args} />;

export const ListLoading = Template.bind({});
ListLoading.args = { isLoading: true, initTodos: () => {} };

export const EmptyList = Template.bind({});
EmptyList.args = {
  initTodos: () => {},
};

export const OneItem = Template.bind({});
OneItem.args = {
  todos: [
    {
      title: "test",
      completed: false,
      id: "stn*&ds*t&n^d",
    },
  ],
  initTodos: () => {},
};

export const SeveralItems = Template.bind({});
SeveralItems.args = {
  todos: [
    {
      title: "test",
      completed: false,
      id: "stn*&ds*t&n^d",
    },
    {
      title: "test",
      completed: true,
      id: "stn*&ds*t^d",
    },
    {
      title: "veeeeerryyyyy loooooong todoooooo, soooooooooo ...... ",
      completed: false,
      id: "stnds*t&n^d",
    },
  ],
  isLoading: false,
  initTodos: () => {},
};
