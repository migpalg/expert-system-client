// @packages
import { render } from "@testing-library/react";

// @scripts
import { QuestionsScreen } from "./questions";

describe("QuestionsScreen unit testing", () => {
  it("should render correctly", () => {
    render(<QuestionsScreen />);
  });
});
