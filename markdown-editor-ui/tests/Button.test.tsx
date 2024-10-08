import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../src/components/Button";

describe("Button", () => {
  it("renders with the correct text", () => {
    render(
      <Button text="Sample Button" onClick={() => console.log("You Clicked")} />
    );

    expect(screen.getByText("Sample Button")).toBeDefined();
  });
});
