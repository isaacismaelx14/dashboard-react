import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  test("should render", () => {
    const component = render(<App />);
    component.getByTestId("AppElement");
  });
});
