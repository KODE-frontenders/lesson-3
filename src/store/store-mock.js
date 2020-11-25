import { action } from "@storybook/addon-actions";

export const storeMock = {
  getState: () => {
    return {
      todos: {
        items: [],
      },
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};
