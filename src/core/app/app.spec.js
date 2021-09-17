// @packages
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// @scripts
import { App } from "./app";

describe("App unit testing", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
