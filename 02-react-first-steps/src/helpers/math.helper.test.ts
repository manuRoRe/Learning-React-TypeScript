import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("should add two positive numbers", () => {
    //! 1. Arrange
    const a = 1;
    const b = 1;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });
  test("should add two positive numbers", () => {
    //! 1. Arrange
    const a = 1;
    const b = 1;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("should substract two positive numbers", () => {
    //! 1. Arrange
    const a = 1;
    const b = 1;

    //! 2. Act
    const result = subtract(a, b);

    //! 3. Assert
    expect(result).toBe(a - b);
  });
  test("should substract two negative numbers", () => {
    //! 1. Arrange
    const a = -2;
    const b = -1;

    //! 2. Act
    const result = subtract(a, b);

    //! 3. Assert
    expect(result).toBe(a - b);
  });
  test("should substract one positive and one negative numbers", () => {
    //! 1. Arrange
    const a = -2;
    const b = 1;

    //! 2. Act
    const result = subtract(a, b);

    //! 3. Assert
    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply two positive numbers", () => {
    const a = 5;
    const b = 5;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
  test("should multiply 0 and any number", () => {
    const a = 5;
    const b = 0;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
  test("should multiply two negative numbers", () => {
    const a = -5;
    const b = -5;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
