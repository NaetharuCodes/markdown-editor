import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../src/components/Button/Button";

vi.mock("../src/components/Button/Button.module.css", () => ({
  default: {
    button: "button-mock-class",
    textOnlyPadding: "textOnlyPadding-mock-class",
  },
}));

describe("Button", () => {
  it("renders with the correct text", () => {
    render(
      <Button text="Sample Button" onClick={() => console.log("You Clicked")} />
    );

    expect(screen.getByText("Sample Button")).toBeDefined();
  });

  it("displays a SVG when provided with one", () => {
    const mockSvg = <svg data-testid="mock-svg"></svg>;
    render(
      <Button
        text="Sample Button"
        icon={mockSvg}
        onClick={() => console.log("You Clicked")}
      />
    );

    expect(screen.getByTestId("mock-svg")).toBeInTheDocument();
    expect(screen.getByText("Sample Button")).toBeDefined();
  });

  it("calls onClick when it is clicked", () => {
    const handleClick = vi.fn();

    render(<Button text="Sample Button" onClick={handleClick} />);

    const button = screen.getByText("Sample Button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("has the correct CSS classes", () => {
    const { rerender } = render(
      <Button text="Sample Button" onClick={() => console.log("You Clicked")} />
    );

    let button = screen.getByText("Sample Button");
    expect(button).toHaveClass("button-mock-class");
    expect(button).toHaveClass("textOnlyPadding-mock-class");

    const mockSvg = <svg data-testid="mock-svg"></svg>;
    rerender(
      <Button
        text="Sample Button"
        icon={mockSvg}
        onClick={() => console.log("You Clicked")}
      />
    );

    button = screen.getByText("Sample Button");
    expect(button).toHaveClass("button-mock-class");
    expect(button).not.toHaveClass("textOnlyPadding-mock-class");
  });
});
