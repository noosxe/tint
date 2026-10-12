import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  afterEach(cleanup);

  it("renders its label", () => {
    render(<Button label="Press me" />);

    expect(
      screen.getByRole("button", { name: "Press me" }),
    ).toBeInTheDocument();
  });

  it("renders children when no label is given", () => {
    render(<Button>Click me</Button>);

    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("fires onClick when clicked", () => {
    const onClick = vi.fn();

    render(<Button label="Press me" onClick={onClick} />);
    fireEvent.click(screen.getByRole("button", { name: "Press me" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
