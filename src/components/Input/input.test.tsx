import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "./Input"; // Adjust the import path as needed
import { vi } from "vitest";

describe("Input component", () => {
  it("renders input with placeholder and label", () => {
    const { getByPlaceholderText, getByText } = render(
      <Input placeholder="Enter text" label="Input Label" value="" />
    );

    const inputElement = getByPlaceholderText("Enter text");
    const labelElement = getByText("Input Label");

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it("calls onChange callback when input value changes", () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
      <Input
        onChange={onChange}
        placeholder="Enter text"
        label="Input Label"
        value=""
      />
    );

    const inputElement = getByPlaceholderText("Enter text");

    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("new value");
  });
});
