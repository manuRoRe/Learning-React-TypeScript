import { fireEvent, render, screen } from "@testing-library/react";
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

  test("should increase count when add button is clicked", () => {
    render(<ItemCounter name="Test item" quantity={2} />);

    const [buttonAdd] = screen.getAllByRole("button");
    //console.log(buttonAdd.innerHTML);
    fireEvent.click(buttonAdd);

    expect(screen.getByText(3)).toBeDefined();
  });

  test("should decrease count when subtract button is clicked", () => {
    render(<ItemCounter name="Test item" quantity={2} />);

    const [, buttonSubtract] = screen.getAllByRole("button");
    fireEvent.click(buttonSubtract);

    expect(screen.getByText(1)).toBeDefined();
  });

  test("should not decrease count when subtract button is clicked and quantity is 0", () => {
    render(<ItemCounter name="Test item" quantity={1} />);

    const [, buttonSubtract] = screen.getAllByRole("button");
    fireEvent.click(buttonSubtract);

    expect(screen.getByText(1)).toBeDefined();
  });

  test("shoul change to red when count is 1", () => {
    const name = "Test item";
    render(<ItemCounter name={name} quantity={1} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe("red");
  });

  test("shoul change to black when count is greater than 1", () => {
    const name = "Test item";
    render(<ItemCounter name={name} quantity={2} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe("black");
  });
});
