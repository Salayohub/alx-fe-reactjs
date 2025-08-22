// src/__tests__/TodoList.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList.jsx"; // adjust path if in components folder

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});
