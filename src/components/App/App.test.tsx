import React from "react";
import { render, cleanup } from "react-testing-library";
import App from ".";

afterEach(cleanup);

it("renders without crashing", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
