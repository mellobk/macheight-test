// HomeComponent.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { HomeComponent } from "./Home";

describe("HomeComponent", () => {
  it("renders the HomeComponent correctly", () => {
    const { getByText, getByPlaceholderText } = render(<HomeComponent />);

    // Add assertions here to check if the component renders as expected.
    // For example:
    expect(getByText("Array")).toBeInTheDocument();
    expect(getByText("target")).toBeInTheDocument();
    expect(getByPlaceholderText("1,2,5,3,-5")).toBeInTheDocument();
    expect(getByPlaceholderText("12")).toBeInTheDocument();
    expect(getByText("Get sum")).toBeInTheDocument();
  });

  it("handles input changes correctly", () => {
    const { getByPlaceholderText } = render(<HomeComponent />);
    const arrayInput = getByPlaceholderText("1,2,5,3,-5");
    const targetInput = getByPlaceholderText("12");

    fireEvent.change(arrayInput, { target: { value: "1,2,3" } });
    fireEvent.change(targetInput, { target: { value: "6" } });

    // Add assertions here to check if the input values have changed.
    // For example:
    expect(arrayInput).toHaveValue("1,2,3");
    expect(targetInput).toHaveValue("6");
  });

  it("handles button click and displays results", () => {
    const { getByText, getByPlaceholderText } = render(<HomeComponent />);
    const arrayInput = getByPlaceholderText("1,2,5,3,-5");
    const targetInput = getByPlaceholderText("12");
    const button = getByText("Get sum");

    fireEvent.change(arrayInput, { target: { value: "1,2,5,3,-5" } });
    fireEvent.change(targetInput, { target: { value: "380" } });
    fireEvent.click(button);

    // Add assertions here to check if the result is displayed as expected.g
    expect(getByText("Results")).toBeInTheDocument();
  });
});
