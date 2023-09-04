import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button"; // Adjust the import path as needed
import { vi } from "vitest";

test("renders Button component with label", () => {
  const onClick = vi.fn(); // Create a mock function for onClick
  const { getByText } = render(<Button onClick={onClick} label="Click me" />);

  const buttonElement = getByText("Click me");

  expect(buttonElement).toBeInTheDocument();
});

test("calls onClick callback when button is clicked", () => {
  const onClick = vi.fn();
  const { getByText } = render(<Button onClick={onClick} label="Click me" />);

  const buttonElement = getByText("Click me");
  fireEvent.click(buttonElement);

  expect(onClick).toHaveBeenCalledTimes(1);
});
