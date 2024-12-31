import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders To-Do List header", () => {
  render(<App />);
  const headerElement = screen.getByText(/To-Do List/i);
  expect(headerElement).toBeInTheDocument();
});

test("adds a new task", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const buttonElement = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: "Test Task" } });
  fireEvent.click(buttonElement);

  const taskElement = screen.getByText(/Test Task/i);
  expect(taskElement).toBeInTheDocument();
});

test("deletes a task", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const buttonElement = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: "Test Task" } });
  fireEvent.click(buttonElement);

  const deleteButton = screen.getByLabelText(/Delete Task/i);
  fireEvent.click(deleteButton);

  const taskElement = screen.queryByText(/Test Task/i);
  expect(taskElement).not.toBeInTheDocument();
});
