import { Component } from "react";

// This mocks `React.memo` by just spitting out the Component that was fed to it
export default jest.mock("react", () => {
  const r = jest.requireActual("react");
  return { ...r, memo: (x: Component) => x };
});
