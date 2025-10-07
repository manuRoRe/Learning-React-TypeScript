import { render, screen } from "@testing-library/react";
import { ItemCounter } from "./ItemCounter";
import { describe, expect, test } from "vitest";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const name = "Test item";
    render(<ItemCounter name={name} />);
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });
  test("should render with custom quantity", () => {
    const name = "Test item";
    const quantity = 10;
    render(<ItemCounter name={name} quantity={quantity} />);
    expect(screen.getByText(quantity)).toBeDefined();
  });
});
