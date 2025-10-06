import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    /* const { container } = render(<MyAwesomeApp />);
    console.log(container.innerHTML); */

    render(<MyAwesomeApp />);
    screen.debug();
  });
});
